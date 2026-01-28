import { NextResponse } from "next/server";
import { notion } from "@/lib/notion";
import { CreatePageParameters } from "@notionhq/client";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function normalizeUrl(input: string) {
  const v = input.trim();
  if (!v) return "";
  if (v.startsWith("http://") || v.startsWith("https://")) return v;
  return `http://${v}`;
}

function isValidUrl(input: string) {
  try {
    const u = new URL(normalizeUrl(input));
    const host = u.hostname.toLowerCase();

    const isLocalhost = host === "localhost";
    const isIPv4 = /^\d{1,3}(\.\d{1,3}){3}$/.test(host);
    const isDomain = host.includes(".");

    const validHost = isLocalhost || isIPv4 || isDomain;
    const validProtocol = u.protocol === "http:" || u.protocol === "https:";

    return validProtocol && validHost;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const website = normalizeUrl(String(body?.website ?? ""));
    const stage = String(body?.stage ?? "").trim();
    const goal = String(body?.goal ?? "").trim();

    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      return NextResponse.json(
        { ok: false, error: "Server not configured (Notion)." },
        { status: 500 },
      );
    }

    // Required checks
    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Name is required." },
        { status: 400 },
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Valid email is required." },
        { status: 400 },
      );
    }
    if (!isValidUrl(website)) {
      return NextResponse.json(
        { ok: false, error: "Valid website URL is required." },
        { status: 400 },
      );
    }
    if (!stage) {
      return NextResponse.json(
        { ok: false, error: "Stage is required." },
        { status: 400 },
      );
    }

    const properties: CreatePageParameters["properties"] = {
      Name: { title: [{ text: { content: name } }] },
      Email: { email },
      Website: { url: website },
      Stage: { select: { name: stage } },
      Source: { select: { name: "Landing" } },
      Status: { select: { name: "New" } },
      "Created At": { date: { start: new Date().toISOString() } },
    };

    if (goal) {
      properties.Goal = { rich_text: [{ text: { content: goal } }] };
    }

    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      properties,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    let message = "Failed to submit. Check Notion database properties.";

    if (err instanceof Error) {
      message = err.message;
    }

    console.error("NOTION_ERROR:", message);

    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

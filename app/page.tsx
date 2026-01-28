import BookCall from "./components/BookCall";
import CalendlyEmbed from "./components/CalendlyEmbed";
import Differentiation from "./components/Differentiation";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import GrowthAudit from "./components/GrowthAudit";
import Guarantee from "./components/Guarantee";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Problem from "./components/Problem";
import SocialProof from "./components/SocialProof";
import Solution from "./components/Solution";
import StickyCTA from "./components/StickyCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <SocialProof /> */}
      <Problem />
      <Solution />
      <HowItWorks />
      <Differentiation />
      <Pricing />
      <Guarantee />
      <GrowthAudit />
      {/* <CalendlyEmbed /> */}
      <BookCall />
      <FAQ />
      <FinalCTA />
      <Footer />

      {/* Optional but recommended */}
      <StickyCTA />
    </main>
  );
}

// app/api/lead/route.ts
// import { NextResponse } from "next/server";

// function isValidEmail(email: string) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const name = String(body?.name ?? "").trim();
//     const email = String(body?.email ?? "").trim();
//     const website = String(body?.website ?? "").trim();
//     const stage = String(body?.stage ?? "").trim();
//     const goal = String(body?.goal ?? "").trim();

//     if (!name || !email || !website) {
//       return NextResponse.json(
//         { ok: false, error: "Missing required fields." },
//         { status: 400 }
//       );
//     }

//     if (!isValidEmail(email)) {
//       return NextResponse.json(
//         { ok: false, error: "Invalid email." },
//         { status: 400 }
//       );
//     }

//     // ✅ For now: log leads on the server (works immediately).
//     // Next phase: send to DB / Notion / Airtable / Google Sheets / Email.
//     console.log("NEW LEAD:", {
//       name,
//       email,
//       website,
//       stage,
//       goal,
//       createdAt: new Date().toISOString(),
//     });

//     return NextResponse.json({ ok: true });
//   } catch (err) {
//     return NextResponse.json(
//       { ok: false, error: "Invalid request." },
//       { status: 400 }
//     );
//   }
// }

// This immediately makes the form “real” (server receives it).
// You’ll see logs in your terminal where Next.js is running.

// Phase 6.2 — Update the Growth Audit form to submit to the API

// Replace your onSubmit inside components/GrowthAudit.tsx with this:

// async function onSubmit(e: React.FormEvent) {
//   e.preventDefault();
//   if (!canSubmit || status === "sending") return;

//   setStatus("sending");
//   try {
//     const res = await fetch("/api/lead", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json().catch(() => ({}));
//     if (!res.ok) {
//       console.error(data);
//       setStatus("idle");
//       return;
//     }

//     setStatus("sent");
//   } catch (err) {
//     console.error(err);
//     setStatus("idle");
//   }
// }

// ✅ Now form submissions actually hit your backend.

// You’ll get:

// A Notion database schema

// NOTION_TOKEN + NOTION_DATABASE_ID env setup

// Production-ready Next.js API route that creates a Notion database row

// Update your GrowthAudit.tsx to submit → /api/lead

// No extra tools needed.

// 1) Create a Notion database (Leads)

// In Notion → New page → Table (database)
// Name it: ScaleOS Leads

// Add these properties (exact names + types):

// Name (Title)

// Email (Email)

// Website (URL)

// Stage (Select)

// Goal (Rich text)

// Source (Select) → set default option “Landing”

// Status (Select) → options: New, Contacted, Qualified, Won, Lost

// Created At (Date)

// You can add more later (MRR, ICP fit, Notes, etc.)

// 2) Create a Notion Integration + connect database

// Go to Notion Integrations: create an integration (internal)

// Copy the Secret (token)

// In your Notion database page: Share → Invite → select your integration (must do this)

// 3) Install Notion SDK
// npm i @notionhq/client

// 4) Add environment variables

// Create .env.local in project root:

// NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxx
// NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// How to get DATABASE_ID

// Open the database in browser → copy the URL.
// It looks like:
// https://www.notion.so/workspace/abcd1234...?...
// That long ID part is your database id.

// (If it has dashes, Notion SDK accepts both dashed and non-dashed.)

// 5) Create Notion client helper
// lib/notion.ts
// import { Client } from "@notionhq/client";

// export const notion = new Client({
//   auth: process.env.NOTION_TOKEN,
// });

// 6) Update API route to save into Notion
// app/api/lead/route.ts
// import { NextResponse } from "next/server";
// import { notion } from "@/lib/notion";

// function isValidEmail(email: string) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const name = String(body?.name ?? "").trim();
//     const email = String(body?.email ?? "").trim();
//     const website = String(body?.website ?? "").trim();
//     const stage = String(body?.stage ?? "").trim();
//     const goal = String(body?.goal ?? "").trim();

//     if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
//       return NextResponse.json(
//         { ok: false, error: "Notion env vars not configured." },
//         { status: 500 }
//       );
//     }

//     if (!name || !email || !website) {
//       return NextResponse.json(
//         { ok: false, error: "Missing required fields (name, email, website)." },
//         { status: 400 }
//       );
//     }

//     if (!isValidEmail(email)) {
//       return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
//     }

//     // Create new row in Notion database
//     await notion.pages.create({
//       parent: { database_id: process.env.NOTION_DATABASE_ID },
//       properties: {
//         // Property names MUST match your Notion database exactly
//         Name: {
//           title: [{ text: { content: name } }],
//         },
//         Email: {
//           email: email,
//         },
//         Website: {
//           url: website,
//         },
//         Stage: stage
//           ? { select: { name: stage } }
//           : undefined,
//         Goal: goal
//           ? { rich_text: [{ text: { content: goal } }] }
//           : undefined,
//         Source: { select: { name: "Landing" } },
//         Status: { select: { name: "New" } },
//         "Created At": { date: { start: new Date().toISOString() } },
//       },
//     });

//     return NextResponse.json({ ok: true });
//   } catch (err: any) {
//     // Common Notion error: "property does not exist"
//     console.error("NOTION_ERROR:", err?.message ?? err);
//     return NextResponse.json(
//       { ok: false, error: "Failed to create Notion lead. Check DB property names." },
//       { status: 500 }
//     );
//   }
// }

// ✅ This will create a new Notion row on every form submit.

// 7) Ensure your GrowthAudit form submits to /api/lead

// In components/GrowthAudit.tsx, your submit handler should be:

// const res = await fetch("/api/lead", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(form),
// });

// (If you already did Phase 6, you’re good.)

// 8) Test

// Run:

// npm run dev

// Submit the form → go to Notion database → you should see a new row.

// If it errors (most common cause)

// “property does not exist” means your Notion database property names don’t match exactly.

// Make sure they are exactly:

// Name

// Email

// Website

// Stage

// Goal

// Source

// Status

// Created At

// (Spelling + spaces must match.)

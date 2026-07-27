import { NextResponse } from "next/server"
import { train, getLastTrained } from "@/lib/concierge-knowledge"

export async function GET() {
  const result = train()

  return NextResponse.json({
    success: true,
    trained_at: new Date().toISOString(),
    ...result,
    last_trained_ago: `${Math.round((Date.now() - getLastTrained()) / 1000)}s`,
    note: "Knowledge base rebuilt. Call this endpoint daily via cron-job.org or Vercel Cron Jobs.",
  })
}

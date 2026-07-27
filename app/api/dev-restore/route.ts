import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'
export async function GET() {
  const filePath = path.join(process.cwd(), 'lib', 'translations.ts')
  let content = fs.readFileSync(filePath, 'utf8')
  
  // Find all matches of `rights: "..."` or `address: "..."`
  const matches = content.match(/address: "[^"]+"/g)
  
  return NextResponse.json({ success: true, matches })
}

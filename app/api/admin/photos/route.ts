import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

export const dynamic = 'force-dynamic';

export async function GET() {
  const photosDir = path.join(process.cwd(), 'public', 'photos');

  if (!fs.existsSync(photosDir)) {
    return NextResponse.json({ trips: [] });
  }

  try {
    const entries = fs.readdirSync(photosDir, { withFileTypes: true });
    const trips: { folder: string; photos: string[]; count: number }[] = [];

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subDir = path.join(photosDir, entry.name);
        try {
          const files = fs.readdirSync(subDir)
            .filter(f => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
            .sort((a, b) => {
              const numA = parseInt(a) || 0;
              const numB = parseInt(b) || 0;
              return numA - numB;
            });

          if (files.length > 0) {
            trips.push({
              folder: entry.name,
              photos: files.map(f => `/photos/${entry.name}/${f}`),
              count: files.length,
            });
          }
        } catch {
          // skip unreadable subdirectory
        }
      }
    }

    trips.sort((a, b) => a.folder.localeCompare(b.folder));

    return NextResponse.json({ trips });
  } catch (error) {
    console.error('Error reading photos directory:', error);
    return NextResponse.json({ trips: [] });
  }
}

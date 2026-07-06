import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const photosDir = path.join(process.cwd(), 'photos');
  
  if (!fs.existsSync(photosDir)) {
    return NextResponse.json({ photos: [] });
  }

  try {
    const files = fs.readdirSync(photosDir).filter(file => {
      const lower = file.toLowerCase();
      return lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png') || lower.endsWith('.webp');
    });

    // Shuffle and pick 12 random photos
    const shuffled = files.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 12);

    return NextResponse.json({ photos: selected });
  } catch (error) {
    console.error("Error reading photos directory:", error);
    return NextResponse.json({ photos: [] });
  }
}

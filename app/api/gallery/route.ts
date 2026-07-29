import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function isImage(filename: string) {
  return IMAGE_EXTS.has(path.extname(filename).toLowerCase());
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export async function GET() {
  const photosDir = path.join(process.cwd(), 'public', 'photos');

  if (!fs.existsSync(photosDir)) {
    return NextResponse.json({ photos: [] });
  }

  try {
    const allPaths: string[] = [];

    const entries = fs.readdirSync(photosDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        // Collect images from this subdirectory (trip folder)
        const subDir = path.join(photosDir, entry.name);
        try {
          const subFiles = fs.readdirSync(subDir)
            .filter(f => isImage(f))
            .sort((a, b) => {
              // Sort numerically so 1.jpg comes before 10.jpg
              const numA = parseInt(a) || 0;
              const numB = parseInt(b) || 0;
              return numA - numB;
            });

          if (subFiles.length > 0) {
            // Take up to 2 images per trip for variety
            subFiles.slice(0, 2).forEach(f => {
              allPaths.push(`${entry.name}/${f}`);
            });
          }
        } catch {
          // skip unreadable subdirectory
        }
      } else if (entry.isFile() && isImage(entry.name) && !entry.name.includes(' ')) {
        // Include flat root files only if they have no spaces (avoid broken URLs)
        allPaths.push(entry.name);
      }
    }

    // Seed by current hour — stable within an hour for caching
    const seed = new Date().getHours() + 1;
    const rng = seededRandom(seed);

    // Fisher-Yates shuffle
    const shuffled = [...allPaths];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Return exactly 16 photos (4 cols × 4 rows)
    const selected = shuffled.slice(0, 16);

    return NextResponse.json({ photos: selected });
  } catch (error) {
    console.error('Error reading photos directory:', error);
    return NextResponse.json({ photos: [] });
  }
}

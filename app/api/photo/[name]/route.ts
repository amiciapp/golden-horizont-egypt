import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  // Prevent directory traversal
  const safeName = path.basename(name);
  const filePath = path.join(process.cwd(), 'photos', safeName);
  
  if (!fs.existsSync(filePath)) {
    return new NextResponse('Photo not found', { status: 404 });
  }
  
  try {
    const buffer = fs.readFileSync(filePath);
    
    // Determine content type
    const lowerName = safeName.toLowerCase();
    let contentType = 'image/jpeg';
    if (lowerName.endsWith('.png')) contentType = 'image/png';
    else if (lowerName.endsWith('.webp')) contentType = 'image/webp';
    else if (lowerName.endsWith('.gif')) contentType = 'image/gif';
    
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, immutable',
      },
    });
  } catch (error) {
    return new NextResponse('Error reading photo', { status: 500 });
  }
}

import fs from 'fs';
import path from 'path'
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const query = new URL(request.url).searchParams;
  const queryParam = query.get('id');
  try {
    const files = fs.readdirSync(path.join(process.cwd(), 'public', 'projects', queryParam!));
    const fileCount = files.length;
    return new NextResponse(JSON.stringify({ count: fileCount }));
  } catch (error) {
    console.error(error);
    return new NextResponse('An error occurred', { status: 500 });
  }
}

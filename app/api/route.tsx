import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { useSearchParams } from 'next/navigation'

export async function GET(request: NextRequest) {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  console.log(id)
  try {
    const files = fs.readdirSync('.public/projects/' + id);
    const fileCount = files.length;
    return new NextResponse(JSON.stringify({ count: fileCount }));
  } catch (error) {
    console.error(error);
    return new NextResponse('An error occurred', { status: 500 });
  }
}

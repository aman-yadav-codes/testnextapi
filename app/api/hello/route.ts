import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Hello from your simple Next.js API!',
    status: 'success',
    timestamp: new Date().toISOString(),
  });
}

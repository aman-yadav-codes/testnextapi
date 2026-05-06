import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Read the JSON body from the request
    const body = await request.json();
    
    // Here you would typically validate the data and save it to a database.
    // For now, we just respond with exactly what was sent to us.
    return NextResponse.json({
      message: 'Signup successful! Here is the data we received:',
      receivedData: body,
      status: 'success'
    }, { status: 201 });
    
  } catch (error) {
    // If the request body isn't valid JSON, catch the error
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

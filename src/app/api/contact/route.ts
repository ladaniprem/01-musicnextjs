import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Here you would typically handle the form submission, e.g., save to a database,
    // send an email, etc.
    console.log('Contact form submission:', { name, email, message });

    // For now, just return a success response
    return NextResponse.json({ message: 'Message received successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}
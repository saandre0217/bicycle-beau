import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`ALTER TABLE customers (
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      phone VARCHAR(255) NOT NULL`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error('customer table error', error)
    return NextResponse.json({ error }, { status: 500 });
  }
}

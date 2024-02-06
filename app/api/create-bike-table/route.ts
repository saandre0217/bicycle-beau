import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Bikes ( id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      model VARCHAR(255) NOT NULL,
      CONSTRAINT fk_customer
        FOREIGN KEY(customer_id) 
	      REFERENCES customers(id);`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
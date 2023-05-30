import { NextResponse } from 'next/server';
 import { fakeApiAnimales } from '@/utils/fakeapi';
export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY || 'paco',
  //   } ,
  // });
  // const data = await res.json();
 
  const data = await fakeApiAnimales()
  return NextResponse.json(data);
}
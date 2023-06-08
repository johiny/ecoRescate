import { NextResponse } from 'next/server';
 import { fakeApiAnimal } from '@/utils/fakeapi';
export async function GET(request: Request) {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY || 'paco',
  //   } ,
  // });
  // const data = await res.json();
 const url = new URL(request.url)
 let animalName = url.pathname.split("/").pop();
 animalName = decodeURIComponent(animalName)
  const data = await fakeApiAnimal(animalName)
  return NextResponse.json(data);
}
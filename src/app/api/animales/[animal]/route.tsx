import { NextResponse } from 'next/server';
 import { fakeApiAnimal } from '@/utils/fakeapi';
export async function GET(request: Request) {
 const url = new URL(request.url)
 let animalName = url.pathname.split("/").pop();
 if(animalName){
   animalName = decodeURIComponent(animalName)
   const data = await fakeApiAnimal(animalName)
   return NextResponse.json(data);
 }
 else{
    return NextResponse.json({error: 'there is not an animal name', status: 404})
 }
}
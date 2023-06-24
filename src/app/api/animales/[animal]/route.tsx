import { NextResponse } from 'next/server';
import { getAnimal } from '@/utils/dbActions';
export async function GET(request: Request) {
 const url = new URL(request.url)
 let animalName = url.pathname.split("/").pop();
 if(animalName){
   animalName = decodeURIComponent(animalName)
   const data = await getAnimal(animalName)
   return NextResponse.json(data);
 }
 else{
    return NextResponse.json({error: 'there is not an animal name', status: 404})
 }
}
import { NextResponse } from 'next/server';
 import { fakeApiAnimales } from '@/utils/fakeapi';
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page')
  const data = await fakeApiAnimales(page)
  if(data){
    return NextResponse.json({data})
  }
  else{
    return NextResponse.json("error terrible")
  }
}
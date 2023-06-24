import { NextResponse } from 'next/server';
 import { fakeApiAnimales } from '@/utils/fakeapi';
 import { getAnimals } from '@/utils/dbActions';
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let page: string | number | null = searchParams.get('page')
  if(page){
    page = parseInt(page)
    const data = await getAnimals(page, 8)
    if(data){
    return NextResponse.json({data})
    }
    else{
    return NextResponse.json("error terrible")
    }
}
else{
  return NextResponse.json("you must provide a page", {status: 400})
}
}
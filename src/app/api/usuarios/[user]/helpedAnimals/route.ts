import { fakeGetHelpedAnimals, fakeAddHelpedAnimals } from "@/utils/fakeapi";
import { NextResponse } from 'next/server';

export async function GET(request: Request, response : Response) {
    const {pathname} = new URL(request.url)
    const user = pathname.split('/')[3]
    const helpedAnimals = await fakeGetHelpedAnimals()
    console.log('animales en el back:', helpedAnimals)
    
    return NextResponse.json(helpedAnimals, {status: 200})

}


export async function POST(request: Request) {
    const body = await request.json()
    const result = await fakeAddHelpedAnimals(body)
    if(result) {
    return NextResponse.json({message :'looks good'}, {status: 200})
    }
    else{
    return NextResponse.json({message :'something went wrong'}, {status: 400})
    }
}

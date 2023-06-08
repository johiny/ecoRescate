import { fakeGetHelpedAnimals, fakeAddHelpedAnimals } from "@/utils/fakeapi";
import { NextResponse } from 'next/server';
import { getUserHelpedAnimals, updateUserHelpedAnimals, getSomeAnimals } from "@/utils/dbActions";

export async function GET(request: Request, response : Response) {
    const {pathname} = new URL(request.url)
    const user = pathname.split('/')[3]
    const userHelpedAnimals = await getUserHelpedAnimals(user)
    const helpedAnimals = await getSomeAnimals(userHelpedAnimals)
    return NextResponse.json(helpedAnimals, {status: 200})

}


export async function POST(request: Request) {
    const animal = await request.json()
    const {pathname} = new URL(request.url)
    const user = pathname.split('/')[3]
    const result = await updateUserHelpedAnimals(user, animal)
    if(result) {
    return NextResponse.json({message :'looks good'}, {status: 200})
    }
    else{
    return NextResponse.json({message :'something went wrong'}, {status: 400})
    }
}

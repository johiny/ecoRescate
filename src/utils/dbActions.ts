import clientPromise from "@/utils/mongodb";


export const updateUserHelpedAnimals = async (username: string, animal: {name: string}) => {
    const client = await clientPromise
    const db = client.db('ecoRescate')
    try{
        const user = await db.collection('users').findOne({username: username})
        if(user){
            const newAnimals = [...user.helpedAnimals, animal.name]
            const result = await db.collection('users').updateOne({username: username}, {$set: {helpedAnimals: newAnimals}})
            return result
        }
        else{
           const result = await db.collection('users').insertOne({username: username, helpedAnimals: [animal.name]})
           return result
        }
    }
    catch(e){
        console.log(e)
    }
}

export const getUserHelpedAnimals = async (username: string) => {
    const client = await clientPromise
    const db = client.db('ecoRescate')
    try{
        const user = await db.collection('users').findOne({username: username})
        if(user){
            return user.helpedAnimals
        }
        else{
            return []
        }
    }
    catch(e){
        console.log(e)
    }
}

export const getSomeAnimals = async (animals: string[]) => {
    const client = await clientPromise
    const db = client.db('ecoRescate')
    const filtro = { name: { $in: animals } };
    try{
    const animals = await db.collection('animals').find(filtro).toArray()
    return animals
    }
    catch(e){
        console.log(e)
    }
}

export const getAnimals = async (page: number, limit: number) => {
    const client = await clientPromise
    const db = client.db('ecoRescate')
    try{
    const animals = await db.collection('animals').find().skip(limit * page).limit(limit).toArray()
    return animals
    }
    catch(e){
        console.log(e)
    }
}

export const getAnimal = async (animalName: string) => {
    const client = await clientPromise
    const db = client.db('ecoRescate')
    const filtro = { name: animalName}
    try{
    const animal = await db.collection('animals').findOne(filtro)
    return animal
    }
    catch(e){
        console.log(e)
    }
}

export const deleteHelpedAnimal = async (username: string, animalName: string) => {
    const client = await clientPromise
    const db = client.db('ecoRescate')
    try{
        const user = await db.collection('users').findOne({username: username})
        if(user){
            const newAnimals = user.helpedAnimals.filter((animal: string) => animal != animalName)
            const result = await db.collection('users').updateOne({username: username}, {$set: {helpedAnimals: newAnimals}})
            return result
        }
        else{
           return false
        }
    }
    catch(e){
        console.log(e)
    }
}
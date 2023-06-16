import animals from "./animals.json"
import { animalType } from "./types";
export const fakeApiAnimales = async (page: number) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return animals.slice(8 * page, 8 * page + 8)
};

export const fakeApiAnimal = async (name: string) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const animalindex = animals.findIndex(animal => animal.name === name)
    return animals[animalindex]
};

const helpedAnimals : animalType[] = []

export const fakeGetHelpedAnimals = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return helpedAnimals
}

export const fakeAddHelpedAnimals = async (animal: animalType) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    try{
    helpedAnimals.push(animal)
    }
    catch(e){
        console.log(e)
        return false
    }
    return true
}
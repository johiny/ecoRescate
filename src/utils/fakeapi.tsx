import animals from "./animals.json"
export const fakeApiAnimales = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return animals.slice(0, 10)
};

export const fakeApiAnimal = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return animals[8]
};
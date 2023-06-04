import animals from "./animals.json"
export const fakeApiAnimales = async (page) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return animals.slice(8 * page, 8 * page + 8)
};

export const fakeApiAnimal = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return animals[8]
};
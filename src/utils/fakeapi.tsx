export const fakeApiAnimales = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return [
        {name:"Elefante de Sabana",
        category:"EN",
        population_trend: "Decreasing",
        description:"Three elephant taxa remain from the sixteen elephant-like species that are known from across the planet in the Pleistocene: Asian Elephant (Elephas maximus), African Savanna Elephant (Loxodonta africana), and African Forest Elephant (Loxodonta cyclotis) (Faurby and Svenning 2015, Malhi et al. 2016). The Asian and African ancestral lineages diverged approximately seven million years ago, and the African Savanna and African Forest ancestral lineages began diverging approximately one million years later (Rohland et al. 2010, Brandt et al. 2014, Roca et al. 2015, Meyer et al. 2017, Palkopoulou et al. 2018). The Third Edition of ‘Mammal Species of the World’ (Wilson and Reeder 2005) was the first to formally designate the African elephant as these two separate species. Recent genetic findings also support this designation (Roca et al. 2007, Ishida et al. 2011, Mondol et al. 2015, Palkopoulou et al. 2018, Kim and Wasser 2019). Hybridization between the two species appears restricted and evident at only 14 of the more than 100 localities recently examined across the vast forest-savanna ecotone. In nine of these 14 localities, hybrid individuals occurred alongside non-hybrid individuals of either one species or the other and not both (i.e., three localities had hybrids and African Forest Elephants only and assigned as this species; six localities had hybrids and African Savanna Elephants only and assigned as this species). For the IUCN Red List assessments, a distribution map published in Mondol et al. (2015) and recent data by Kim and Wasser (2019) are used to assign localities as range of either L. africana or L. cyclotis.",
        img: "https://images.unsplash.com/photo-1497877525637-8139b5d0ef24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"

},{
    name: "Pingüino del Cabo",
    category:"EN",
    population_trend: "Decreasing",
        description:"60-70 cm. Medium-sized, black-and-white penguin. Adult black above, white below with variable amount of black spotting on breast and belly. Broad, black breast-band and black-and-white facial pattern diagnostic. Whitish bare skin over the eyes becomes bright pinkish-red in very hot conditions. Male has deeper, more robust bill. Juvenile initially dark slaty-blue above, turning browner and, in second and third year, shows varying amount of adult facial pattern. Similar spp. Very rarely, some individuals show a double black breast-band - indicative of Magellanic Penguin S. magellanicus, which has never been positively recorded in Africa.",
        img:"https://plus.unsplash.com/premium_photo-1664298056797-2c95caaa2569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1541&q=80"
},]
};

export const fakeApiAnimal = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return {
    name: "Pingüino del Cabo",
    category:"EN",
    population_trend: "Decreasing",
        description:"60-70 cm. Medium-sized, black-and-white penguin. Adult black above, white below with variable amount of black spotting on breast and belly. Broad, black breast-band and black-and-white facial pattern diagnostic. Whitish bare skin over the eyes becomes bright pinkish-red in very hot conditions. Male has deeper, more robust bill. Juvenile initially dark slaty-blue above, turning browner and, in second and third year, shows varying amount of adult facial pattern. Similar spp. Very rarely, some individuals show a double black breast-band - indicative of Magellanic Penguin S. magellanicus, which has never been positively recorded in Africa.",
        img:"https://plus.unsplash.com/premium_photo-1664298056797-2c95caaa2569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1541&q=80"
    }
};
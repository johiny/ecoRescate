export type animalType = {
    name: string,
    category: string,
    population_trend: string,
    description: string,
    img:string
}

export interface nextResponse extends Response {
    data ?: any
  }
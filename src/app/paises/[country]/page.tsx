import AnimalCard from "@/components/AnimalCard"
const CountryPage = ({params} : {params : {country : string}}) => {
  return (
    <div className="flex flex-col mt-5">
        <h2 className="text-5xl font-bold text-center">{params.country.toUpperCase()}</h2>
        <div className="flex flex-wrap flex-row justify-center mt-5 gap-16 px-10">
          <AnimalCard></AnimalCard>
          <AnimalCard></AnimalCard>
          <AnimalCard></AnimalCard>
          <AnimalCard></AnimalCard>
          <AnimalCard></AnimalCard>
          <AnimalCard></AnimalCard>
        </div>
    </div>
  )
}

export default CountryPage
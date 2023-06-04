'use client';
import { animalType } from "@/utils/types";
import useIntersectionObserver from "@/utils/useIntersectionObserver";
import useSWRInfinite from 'swr/infinite'
import AnimalCard from "./AnimalCard";

const PAGE_SIZE = 6

const getKey = (pageIndex : number, previousPageData : any, pageSize : number) => {
  if (previousPageData && !previousPageData.data.length) return null // reached the end
  return `http://localhost:3000/api/paises/mexico?page=${pageIndex + 1}`                    // SWR key
}

const MoreResults = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, size, setSize } = useSWRInfinite((...args) => getKey(...args, PAGE_SIZE), fetcher)
  const refetch = () => setSize(size + 1)
  const {targetRef} = useIntersectionObserver({threshold: 0.5}, refetch)

  return (
    <>
     { data ? data.map(pages => {
      return(
      pages.data.map(animal => {
         return (
          <>
         <AnimalCard animal={animal}/>
         </>
         )
         })
      )
     }) : <div>loading</div>
    }
    <div onClick={() => refetch()} ref={targetRef}  className="w-screen h-5 bg-black"></div>
    </>
  )
}

export default MoreResults
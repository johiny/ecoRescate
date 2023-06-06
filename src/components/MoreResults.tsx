'use client';
import { animalType } from "@/utils/types";
import useIntersectionObserver from "@/utils/useIntersectionObserver";
import useSWRInfinite from 'swr/infinite'
import AnimalCard from "./AnimalCard";
import { useState, useEffect } from "react";
import Loader from '@/components/Loader'

const getKey = (pageIndex : number, previousPageData : any, setEndReached: Function) => {
  if (previousPageData && !previousPageData.data.length){
    setEndReached(true)
    return null
  } // reached the end
  return `http://localhost:3000/api/paises/mexico?page=${pageIndex + 1}`                    // SWR key
}

const MoreResults = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const [endReached, setEndReached] = useState(false)
  const { data, size, setSize, isValidating } = useSWRInfinite((...args) => getKey(...args, setEndReached), fetcher)
  const refetch = () => {
    if(!endReached){
      setSize(size + 1)
    }
  }
  const {targetRef} = useIntersectionObserver({threshold: 0.5}, refetch)
  useEffect(() => {
    console.log(endReached)
  },[endReached])
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
     }) : <></>
    }
    <div onClick={() => refetch()} ref={targetRef}  className="w-screen flex justify-center mb-5 pt-1">
      {isValidating ? <Loader/> : <h2 className="text-2xl">No hay más resultados</h2>}
    </div>
    </>
  )
}

export default MoreResults
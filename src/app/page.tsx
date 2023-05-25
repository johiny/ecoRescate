import HomeDescription from '@/components/HomeDescription'
import Map from '@/components/Map'
export default function Home() {
  return (
    <div className='flex flex-col-reverse items-center md:flex-row md:items-start'>
    <HomeDescription/>
    <Map/>
    </div>
  )
}

import HomeOption from "@/components/HomeOption"
import IUCN_Red_List from "@/media/IUCN_Red_List.png"
const HomeOptions = () => {
  return (
    <div className="flex flex-row justify-between ">
       <HomeOption img={{image:IUCN_Red_List, alt: "IUCN Red List"}}/>
    </div>
  )
}

export default HomeOptions
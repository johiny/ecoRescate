import mexico from "@/media/paises/mexico.svg"
import guatemala from "@/media/paises/guatemala.svg"
import honduras from "@/media/paises/honduras.svg"
import nicaragua from "@/media/paises/nicaragua.svg"
import colombia from "@/media/paises/colombia.svg"
import venezuela from "@/media/paises/venezuela.svg"
import ecuador from "@/media/paises/ecuador.svg"
import peru from "@/media/paises/peru.svg"
import brazil from "@/media/paises/brazil.svg"
import guyana from "@/media/paises/guyana.svg"
import surinam from "@/media/paises/surinam.svg"
import guyana_francesa from "@/media/paises/guyana_francesa.svg"
import bolivia from "@/media/paises/bolivia.svg"
import paraguay from "@/media/paises/paraguay.svg"
import argentina from  "@/media/paises/argentina.svg"
import chile from  "@/media/paises/chile.svg"
import InteractiveCountry from "@/components/InteractiveCountry"
const Map = () => {
  return (
    <div className="relative md:w-7/12 w-screen md:px-0  h-[72vh] md:h-[88.5vh] px-2  overflow-y-scroll  map_container">
        <div className="relative dynamicMap w-full h-full">
       <InteractiveCountry country={{name:"Mexico", img:mexico}} size={300}/>
       <InteractiveCountry country={{name:"Guatemala", img:guatemala}} size={50} top={180} left={245}/>
       <InteractiveCountry country={{name:"Honduras", img:honduras}} size={70}  top={200} left={285}/>
       <InteractiveCountry country={{name:"Nicaragua", img:nicaragua}} size={50} top={222} left={310}/>
       <InteractiveCountry country={{name:"Colombia", img:colombia}} size={250} top={268} left={333}/>
       <InteractiveCountry country={{name:"Venezuela", img:venezuela}} size={180} top={255} left={500}/>
       <InteractiveCountry country={{name:"Ecuador", img:ecuador}} size={82} top={422} left={403}/>
       <InteractiveCountry country={{name:"Peru", img:peru}} size={155} top={453} left={400}/>
       <InteractiveCountry country={{name:"Brazil", img:brazil}} size={508} top={374} left={508}/>
       <InteractiveCountry country={{name:"Guyana", img:guyana}} size={50} top={328} left={675}/>
       <InteractiveCountry country={{name:"Surinam", img:surinam}} size={40} top={358} left={722}/>
       <InteractiveCountry country={{name:"Guyana Francesa", img:guyana_francesa}} size={26} top={340} left={766}/>
       <InteractiveCountry country={{name:"Bolivia", img:bolivia}} size={150} top={596} left={562}/>
       <InteractiveCountry country={{name:"Paraguay", img:paraguay}} size={100} top={743} left={660}/>
       <InteractiveCountry country={{name: "Argentina", img:argentina}} size={230} top={785} left={510}/>
       <InteractiveCountry country={{name: "Chile", img:chile}} size={110} top={710} left={473}/>
       </div>
    </div>
  )
}

export default Map
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
    <div className="relative md:w-7/12 w-screen px-5 h-screen">
        <div className="relative dynamicMap w-full h-full">
       <InteractiveCountry country={mexico} size={300}/>
       <InteractiveCountry country={guatemala} size={50} top={180} left={245}/>
       <InteractiveCountry country={honduras} size={70}  top={200} left={285}/>
       <InteractiveCountry country={nicaragua} size={50} top={222} left={310}/>
       <InteractiveCountry country={colombia} size={250} top={268} left={333}/>
       <InteractiveCountry country={venezuela} size={180} top={255} left={500}/>
       <InteractiveCountry country={ecuador} size={82} top={422} left={403}/>
       <InteractiveCountry country={peru} size={155} top={453} left={400}/>
       <InteractiveCountry country={brazil} size={508} top={374} left={508}/>
       <InteractiveCountry country={guyana} size={50} top={328} left={675}/>
       <InteractiveCountry country={surinam} size={40} top={358} left={722}/>
       <InteractiveCountry country={guyana_francesa} size={26} top={364} left={766}/>
       <InteractiveCountry country={bolivia} size={150} top={596} left={562}/>
       <InteractiveCountry country={paraguay} size={100} top={743} left={660}/>
       <InteractiveCountry country={argentina} size={230} top={785} left={510}/>
       <InteractiveCountry country={chile} size={110} top={710} left={473}/>
       </div>
    </div>
  )
}

export default Map
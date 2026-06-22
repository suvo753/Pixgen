import { TopGenerationCard } from "@/lib/data";
import PhotoCard from './PhotoCard'



const TopGeneration = async() => {

    const TopCard = await TopGenerationCard();
    return (

        <div>
             <h1 className="my-5 font-bold text-2xl ml-10">Top Generations </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 m-10" >
           
            {TopCard.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
            
        </div>
        </div>
    );
};

export default TopGeneration;
import { TopGenerationCard } from "@/lib/data";


const PhotoDetails = async({params}) => {
    const {id} = await params;
    // console.log(id);
    const data = await TopGenerationCard();
    const expectedData = data.find(p=> p.id==id);
    console.log(expectedData);
    return (
        <div>

           <h1>{expectedData.title}</h1>
           <h1>{expectedData.prompt}</h1>
            
        </div>
    );
};

export default PhotoDetails;
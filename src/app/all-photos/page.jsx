import { TopGenerationCard } from '@/lib/data';
import PhotoCard from '../../components/PhotoCard';
import CategoryItem from '@/components/shared/CategoryItem';


const All_Photo = async({searchParams}) => {
    const {category} = await searchParams;

    const AllPhoto = await TopGenerationCard();

const filterPhoto =  category ? AllPhoto.filter(photo => photo?.category?.toLowerCase() === category.toLowerCase()): AllPhoto ;


    return (

        <div>

            <h2 className='text-2xl font-bold ml-10'>All Photos </h2>

            <CategoryItem/>

    

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 m-10" >
            {filterPhoto.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
        </div>
        </div>
    );
};

export default All_Photo;
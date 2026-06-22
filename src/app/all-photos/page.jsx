import { TopGenerationCard } from '@/lib/data';
import React from 'react';
import PhotoCard from '../components/PhotoCard';

const All_Photo = async() => {

    const AllPhoto = await TopGenerationCard();
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 m-10" >
            {AllPhoto.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
        </div>
    );
};

export default All_Photo;
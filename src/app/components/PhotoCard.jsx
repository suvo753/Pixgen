import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const PhotoCard = ({photo}) => {
    console.log(photo);
    return (
        <Card className="rounded-xl m-2">
            <div className="relative w-full aspect-square">

                <Image
                className="object-cover rounded-xl"
                src={photo.imageUrl}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={photo.title}/>
                <Chip className="absolute top-1 right-3">{photo.category}</Chip>
            </div>
            <div>
                <h2 className="font-medium">{photo.title}</h2>
            </div>

            <div className="flex items-center justify-between">
                
            <div className="flex items-center gap-3">
                <p><FaHeart /></p>
                <p>{photo.likes}</p>
            </div>


                <div className="flex items-center gap-3">
                <p><BiDownload /></p>
                <p>{photo.downloads}</p>
            </div>
            </div>
           <Link href={`/all-photos/${photo.id}`}><Button variant="outline" className="w-full">View Details </Button></Link>
        </Card>
    );
};

export default PhotoCard;
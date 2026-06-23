import { CategoryData } from '@/lib/data';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const CategoryItem = async() => {

    const CategoryDataRes = await CategoryData();
    console.log(CategoryDataRes);
    return (
        <div className='mt-4 ml-10 '>

            {CategoryDataRes.map(C=>


        <Link key={C.id} href={`?category=${C.name.toLowerCase()}`}>

            <Button className="m-2" variant='outline' size='sm'
             key={C.id}>{C.name}</Button>
        
        </Link> 
        

             
             
             )}
            
        </div>
    );
};

export default CategoryItem;  
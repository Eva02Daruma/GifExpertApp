/* eslint-disable react/prop-types */

import { GiftItem } from "./GifItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

   
    const {images, isLoading} = useFetchGifs(category);

    console.log(images, isLoading);


  return (
    <>
    <div className="text-start">
    <p className=" py-5 px-1  text-start md:text-2xl text-lg">{category} </p>
    {
        isLoading && <p className="animate-pulse">Cargando...</p>

    }
    <div className="grid md:grid-cols-3 md:gap-4 bg-slate-700">
        {/* {images.map((img) => (} */}
        {images.map((image) => (
            // <li className="p-4" key={id}>
            //     {title}
            //     <img className=" w-full h-64 object-cover" src={url} alt={title} />
            // </li>
            <GiftItem 
            key={image.id}
            {...image}
            
            />
        ))}
    </div>



    </div>
 

    </>

   
  )
}

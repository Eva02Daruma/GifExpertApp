import { useState } from "react";
import { AddCategory } from "./funciones/AddCategory";
import { GifGrid } from "./funciones/GifGrid";


export const MainCompo = () => {
  const [categories, setCategories] = useState([
    "Chainsaw Man",
    "Evangelion",
    "One Piece",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };


  return (
    <>
      <div className=" bg-gray-800">
        <div className=" mx-auto my-auto text-center  ">
          {/* Titulo */}
          <div className=" text-3xl  text-white first-letter:text-4xl p-3">
            <p>Gif Manager</p>
          </div>

          <div className=" ">
            {/*Input*/}
            <AddCategory
              onNewCategory={(event) => onAddCategory(event)}
            />
            {/*Seccion Listado de gifs*/}
            <div className=" p-20 gap-6 my-10 font-sans text-white">{categories.map((Category) => (
                  <GifGrid key={Category} category={Category} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

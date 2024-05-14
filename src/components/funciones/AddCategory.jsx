import { useState } from "react";

import propTypes from "prop-types";


export const AddCategory = ({ onNewCategory }) => {

// funcion para agregar categorias
  const [inputValue, setInputValue] = useState();


  const onInputChange = (target) => {
    // para que el input se convierta en mayusculas

    setInputValue(target.value.charAt(0).toUpperCase() + target.value.slice(1));


  };

  const onSubmit = (event) => {
    event.preventDefault();
    //validador de caracteres
    if (inputValue.trim().length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form className="m-2" onSubmit={ (event) => onSubmit(event)} aria-label="form">
      <input
        className="md:py-3 md:px-12 bg-gray-100 text-gray-800 shadow-lg rounded-lg hover:bg-rose-800 hover:text-gray-100"
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={(event) => onInputChange(event.target)}

      />
    </form>
  );
};


AddCategory.propTypes = {
    onNewCategory: propTypes.func.isRequired,
    };


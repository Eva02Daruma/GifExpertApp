/* eslint-disable no-undef */
import { fireEvent, render, screen,jest } from "@testing-library/react";
import { AddCategory } from "../../../src/components/funciones/AddCategory";



describe("Pruebas en <AddCategory />", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Luffy" } });
    expect(input.value).toBe("Luffy");
    screen.debug();
  });

  test("Debe de llamar onNewCategory si el input tiene un valor ", () => {
    const inputValue = "Luffy";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue }});
    fireEvent.submit(form);
    // screen.debug();
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue.trim());


  });

  test('No debe de llamar onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).not.toHaveBeenCalled();
  }
    );
});

/* eslint-disable no-undef */
import { render , screen} from "@testing-library/react";
import { GiftItem } from "../../../src/components/funciones/GifItem";


describe("Pruebas en <GiftItem />", () => {
  const title = "Un titulo";
  const url = "https://localhost/algo.jpg";

  test("debe de hacer match con el snapshot ", () => {
    const { container } = render(<GiftItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el url y el Alt indicado", () => {
    render(<GiftItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test('Debe mostrar el titulo en el componente', () => {
    const { getByText } = render(<GiftItem title={title} url={url} />);
    expect(getByText(title)).toBeInTheDocument();
  } )
});

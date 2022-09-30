import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "../components/main/Main";


test('Renders main page correctly', () => {
  render(<Main />)
  const textWelcome = screen.getByText(/Bienvenidos!!!/i)
    expect(textWelcome);
})

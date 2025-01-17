import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Button from "./Button";

describe("Button component", () => {
  test("renders button with label", () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
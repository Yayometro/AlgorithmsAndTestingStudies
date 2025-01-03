import { describe, it, test, expect } from "vitest";

import { render, screen, act, cleanup } from "@testing-library/react";
import { Counter } from "./Counter";
import "@testing-library/jest-dom/vitest";
// este nos da mas metodos del react-testing library
import userEvent from "@testing-library/user-event";
import { toBeDisabled } from "@testing-library/jest-dom/matchers";

// export function createButton() {
// 	const button = document.createElement('button');
// 	button.textContent = 'Click Me';

// 	button.addEventListener('click', () => {
// 		button.textContent = 'Clicked!';
// 	});

// 	return button;
// }

// describe('createButton', () => {
//     //Only using the html props
// 	it('should create a button element', () => {
// 		const button = createButton();
// 		expect(button.tagName).toBe('BUTTON');
// 	});

// 	it('should have the text "Click Me"', () => {
// 		const button = createButton();
// 		expect(button.textContent).toBe('Click Me');
// 	});

// 	it('should change the text to "Clicked!" when clicked', () => {
// 		const button = createButton();
// 		button.click();
// 		expect(button.textContent).toBe('Clicked!');
// 	});
// });

describe("Counter", () => {
  //   beforeEach(() => {
  //     render(<Counter />);
  //   });
  afterEach(() => {
    cleanup();
  });
  it("renders with an initial count of 0", () => {
    render(<Counter />);
    const divCount = screen.getByTestId("counter-count");
    expect(divCount).toHaveTextContent("0");
  });
  it('disables the "Decrement" and "Reset" buttons when the count is 0', async () => {
    render(<Counter />);
    const divCount = screen.getByTestId("counter-count");
    expect(divCount).toHaveTextContent("0");
    const decrement = screen.getByRole("button", { name: "Decrement" });
    const reset = screen.getByRole("button", { name: "Reset" });
    expect(decrement).toBeDisabled();
    expect(reset).toBeDisabled();
  });

  it('displays "day" when the count is 1', async () => {
    render(<Counter />);
    const increment = screen.getByRole("button", { name: "Increment" });
    const divCount = screen.getByTestId("counter-count");
    const day = screen.getByTestId("counter-unit");
    expect(divCount).toHaveTextContent("0");
    await act(async () => await userEvent.click(increment));
    expect(divCount).toHaveTextContent("1");
    expect(day).toHaveTextContent("day");
  });
  it('decrements the count when the "Decrement" button is clicked', async () => {
    render(<Counter initialCount={1} />);
    const count = screen.getByTestId("counter-count");
    const decrement = screen.getByRole("button", { name: "Decrement" });
    expect(count).toHaveTextContent("1");
    await act(async () => await userEvent.click(decrement));
    expect(count).toHaveTextContent("0");
  });

  it("does not allow decrementing below 0", async () => {
    render(<Counter />);
    const divCount = screen.getByTestId("counter-count");
    expect(divCount).toHaveTextContent("0");
    const decrement = screen.getByRole("button", { name: "Decrement" });
    await act (async () => await userEvent.click(decrement))
    expect(decrement).toBeDisabled(decrement)
    expect(divCount).toHaveTextContent("0");
  });
    it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    })
    it('updates the document title based on the count', async () => { 
        render(<Counter />);
        const increment = screen.getByRole("button", {name: "Increment"});
        const title = document.title
        expect(title).toBe("0 days — Accident Counter")
        await userEvent.click(increment)
        const titleUpdated = document.title
        screen.debug()
        expect(titleUpdated).toBe("1 day — Accident Counter")
    })
});

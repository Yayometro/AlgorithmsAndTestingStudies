
import {  describe, it, test, expect } from "vitest";

import {render, screen} from "@testing-library/react"
import { Counter } from "./Counter";
import '@testing-library/jest-dom/vitest';
// este nos da mas metodos del react-testing library 
// import userEvent from "@testing-library/user-event";

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
    // beforeEach(() => {
    //     render(<Counter/>)
    // })
    it('renders with an initial count of 0', () => {
        render(<Counter/>)
        screen.debug()
        const divCount = screen.getByTestId('counter-count')
        expect(divCount).toHaveTextContent("0")
        // // Nunca uses el id ni clases para tomar objetos.
        // const divState = screen.findByTestId("counter-count")
        // console.log(divState)
        // expect(divState).toBe(0)
    })
    // it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {})
})


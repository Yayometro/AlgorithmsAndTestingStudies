import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { describe, it, expect, afterEach, beforeEach } from "vitest";
import Calculator from "../src/Calculator";
import { numbers, operations } from "../src/Calculator";

//Name of this test should use extension "jsx"
describe("calculator", () => {
  // To avoid duplicates while testing we use:
  //afterEach metod from vite/test
  // cleanup as an argument.
  //With this two you remove the duplication.
  beforeEach(() => render(<Calculator />))
  afterEach(cleanup); // 
  it("component should be rendered", () => {
  });
  it("component should have a title as first element", () => {
    //getByText is commonly used
    screen.getByText("Calculator");
  });
  it("component should render number buttons", () => {
    const numArray = numbers.map(a => {
        a.map(n => {
            screen.getByText(`${n}`)
        })
    })
  });
  it("component should render operational buttons", () => {
    const operationsArray = operations.map(o => {
        screen.getByText(`${o}`)
    })
  });
  it("component should render result button", () => {
    screen.getByText("=");
  });
  it("component should have a result", () => {
    // screen.getByText("Calculator");
    screen.getByRole('cell')
  });
  it('number buttons should be organized in 4 columns', () => {
    expect(numbers.length).toBe(4)
  })
  //Now you have to do the "Test user cases"
  it("user should click at 1 btn and see that number", () => {
    const display = screen.getByRole('cell');
    console.log(display.innerText)
    expect(display.innerText).toBe("");
    // expect(display)
    // fireEvent comes from react and just listen to the click event. Ignores all the intermediate events
    const one = screen.getByText('0');
    fireEvent.click(one)
    expect(display.innerText).toBe("0");
  })
  it("user should display an operation", () => {
    const display = screen.getByRole('cell');
    console.log(display.innerText)
    expect(display.innerText).toBe("");
    const valOne = screen.getByText('1');
    const valOperator = screen.getByText('+');
    const valTwo = screen.getByText('1');
    fireEvent.click(valOne)
    fireEvent.click(valOperator)
    fireEvent.click(valTwo)
    expect(display.innerText).toBe("1+1");
  })
  it("user should perform an operation and get the right result", () => {
    const display = screen.getByRole('cell');
    console.log(display.innerText)
    expect(display.innerText).toBe("");
    const valOne = screen.getByText('1');
    const valOperator = screen.getByText('+');
    const valTwo = screen.getByText('1');
    fireEvent.click(valOne)
    fireEvent.click(valOperator)
    fireEvent.click(valTwo)
    expect(display.innerText).toBe("1+1");
    const resultbtn = screen.getByText('=');
    fireEvent.click(resultbtn)
    expect(display.innerText).toBe("2");
  })
});

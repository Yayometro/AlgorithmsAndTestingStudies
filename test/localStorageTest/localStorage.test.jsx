import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LocalStorage from "./LocalStorage";
import userEvent from "@testing-library/user-event";



describe("LocalStorage", () => {
    it('should store the value in localStorage', async () => {
        render(<LocalStorage/>)
        const input = screen.getByLabelText("Secret")
        const storeButton = screen.getByRole("button", {name: "Store Secret"})
        await userEvent.type(input, "secret")
        await userEvent.click(storeButton)
        expect(localStorage.getItem("secret")).toBe("secret")
    })
    it('should save and receive the same thing in local storage', async () => {
    })
})

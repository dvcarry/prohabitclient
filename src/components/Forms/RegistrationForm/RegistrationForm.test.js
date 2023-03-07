import { RegistrationForm } from "./RegistrationForm";
import { render, screen, fireEvent } from "@testing-library/react"


const mockRegisterFn = jest.fn();

jest.mock("../../../hooks/useAuth", () => ({
    useAuth: () => ({ registerUser: mockRegisterFn }),
}));

describe('RegistrationForm', () => {

    let button
    let input

    beforeEach(() => {
        render(<RegistrationForm />);
        button = screen.getByRole('button', { name: "Зарегистрироваться" });
        input = screen.getByPlaceholderText('email');
    });

    test('render form', async () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });
    test('input empty email', async () => {
        fireEvent.click(button);
        expect(await screen.findByText(/корректный/i)).toBeInTheDocument();
    });
    test('input incorrect email', async () => {
        fireEvent.change(input, {target: {value: 'qwerty'}})
        fireEvent.click(button);
        expect(await screen.findByText(/корректный/i)).toBeInTheDocument();
    });
    test('input correct email', async () => {
        fireEvent.change(input, {target: {value: 'qwerty@sdsdsd.ru'}})
        fireEvent.click(button);
        expect(mockRegisterFn).toHaveBeenCalledTimes(1);
        expect(mockRegisterFn).toHaveBeenCalledWith('qwerty@sdsdsd.ru');    
    });
});
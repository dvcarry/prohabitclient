import { RegistrationForm } from "./RegistrationForm";
import { render, screen } from "@testing-library/react"
import { renderComponentWithRouter } from "../../../tests/helpers/renderWithRouter";
import userEvent from "@testing-library/user-event";
import { api } from "../../../config/api";

jest.mock('../../../config/api')

describe('RegistrationForm', () => {

    let button
    let input

    beforeEach(async () => {
        render(renderComponentWithRouter(<RegistrationForm />));
        button = screen.getByRole('button', { name: "Зарегистрироваться" });
        input = screen.getByPlaceholderText('email');
        
    });

    test('render form', async () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });
    test('input empty email', async () => {
        userEvent.click(button);
        expect(await screen.findByText(/корректный/i)).toBeInTheDocument();
    });
    test('input incorrect email', async () => {
        userEvent.type(input, 'qwerty')
        userEvent.click(button);
        expect(await screen.findByText(/корректный/i)).toBeInTheDocument();
    });
    test('input correct email', async () => {
        api.registration.mockResolvedValueOnce({ data: { success: true, token: 'dddddd' } });
        userEvent.type(input, 'qwerty@sdsdsd.ru');
        userEvent.click(button);
        expect(api.registration).toHaveBeenCalledTimes(1);
        expect(api.registration).toHaveBeenCalledWith({ email: 'qwerty@sdsdsd.ru' });    
    });
});
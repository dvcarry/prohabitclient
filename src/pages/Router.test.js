import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";



describe('router test', () => {
    const handleSubmit = jest.fn()

    test('test unlogin user', async () => {
        render(renderWithRouter());
        expect(await screen.findByText(/Формируй привычки в компании единомышленников/i)).toBeInTheDocument();
        const inputFields = screen.getAllByPlaceholderText('email');
        fireEvent.change(inputFields[0], { target: { value: 'ssd@sdfdf.ru' } });
        const submitButtons = screen.getAllByRole('button', { name: /Зарегистрироваться/i });
        userEvent.click(submitButtons[0]);
        expect(await screen.findByText(/Выбери одну привычку/i)).toBeInTheDocument();
        expect(await screen.findByText(/Медитация/i)).toBeInTheDocument();
        userEvent.click(screen.getByText(/Медитация/i));
        expect(await screen.findByText(/Медитация/i)).toHaveClass('card-active');
        const submitHabitButton = screen.getByRole('button', { name: /Сохранить/i });
        console.log("🚀 ~ file: Router.test.js:20 ~ test ~ submitHabitButton:", submitHabitButton.textContent)
        userEvent.click(submitHabitButton);
        // expect(handleSubmit).toHaveBeenCalledTimes(1);
        // expect(await screen.findByText(/Твоя команда/i)).toBeInTheDocument();


    })
})

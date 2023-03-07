import { DateCard } from "./DateCard";
import { render, screen } from "@testing-library/react"


describe('DateCard', () => {

    test('render undone', async () => {
        render(<DateCard date="2023-02-28" done={false} />);
        expect(await screen.findByText('28.02.2023')).toBeInTheDocument();    
    });

});
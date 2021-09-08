import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import BackButton from '.';

describe('BackButton', () => {
    beforeEach(() => {
        render(<BackButton />, { wrapper: MemoryRouter });
    })

    test('exists', () => {
        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument()
    })

    test('renders a back button', () => {
        const btn = screen.getByRole('button')
        expect(btn.textContent).toContain('Back');
    })

})
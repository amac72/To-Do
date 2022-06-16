import { render, screen, cleanup } from '@testing-library/react';
import Header from './Header';

afterEach(() => {
    cleanup();
});

test('should render header component', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header-1');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent('To-Do');
})
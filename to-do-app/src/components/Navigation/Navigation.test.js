import { render, screen, cleanup } from '@testing-library/react';
import Navigation from './Navigation';

afterEach(() => {
    cleanup();
});

test('should render Navigation component', () => {
    render(<Navigation />);
    const navigationElement = screen.getByTestId('navigation-1');
    expect(navigationElement).toBeInTheDocument();
    expect(navigationElement).toHaveTextContent('To-Do');
})
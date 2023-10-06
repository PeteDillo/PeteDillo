import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Header from '../header';

test('should render header component', () =>{
    render(<Header />)
    const headerComponent = screen.getByTestId('header-1');
    expect(headerComponent).toBeInTheDocument();
})
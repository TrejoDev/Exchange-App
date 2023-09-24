import { render, screen } from '@testing-library/react';

import { InputAmount } from '@/component';


describe('InputAmount', () => {
    test('should have "Amount" label', () => {
        render(<InputAmount />)  //Arrange

        const myElem = screen.getByLabelText('Amount')  //Act

        expect(myElem).toBeInTheDocument(); //assert
    })
    test('should match with snapshot', () => {
        const { container } = render(<InputAmount />)
        expect(container).toMatchSnapshot();
    })

})


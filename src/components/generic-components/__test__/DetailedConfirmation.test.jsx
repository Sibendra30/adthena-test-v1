import React from 'react';
import { render } from '@testing-library/react';
import DetailedConfirmation from '@components/generic-components/DetailedConfirmation';

describe('Testing Detailed Confirmation Component', () => {
  it('Detailed Confirmation component should render', () => {
    const { container } = render(<DetailedConfirmation />);
    expect(container).toMatchSnapshot();
  });
  it('Should load two buttons', () => {
    const { container } = render(<DetailedConfirmation />);
    expect(container.querySelectorAll('button').length).toEqual(2);
  });
  it('Should load delete text box', () => {
    const { container } = render(<DetailedConfirmation />);
    expect(container.querySelectorAll('input[type="text"]').length).toEqual(1);
  });
  it('Should load confirmation header, body & history', () => {
    const { container } = render(<DetailedConfirmation />);
    expect(container.querySelectorAll('.confirm-warning-header').length).toEqual(1);
    expect(container.querySelectorAll('.confirmation-details').length).toEqual(1);
    expect(container.querySelectorAll('.confirmation-instr').length).toEqual(1);
  });
});

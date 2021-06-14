import React from 'react';
import { render } from '@testing-library/react';
import DetailedConfirmation from '@components/generic-components/DetailedConfirmation';

describe('Testing Detailed Confirmation Component', () => {
  let containerComp;
  beforeEach(() => {
    const { container } = render(<DetailedConfirmation />);
    containerComp = container;
  });
  it('Detailed Confirmation component should render', () => {
    expect(containerComp).toMatchSnapshot();
  });
  it('Should load two buttons', () => {
    expect(containerComp.querySelectorAll('button').length).toEqual(2);
  });
  it('Should load delete text box', () => {
    expect(containerComp.querySelectorAll('input[type="text"]').length).toEqual(1);
  });
  it('Should load confirmation header, body & history', () => {
    expect(containerComp.querySelectorAll('.confirm-warning-header').length).toEqual(1);
    expect(containerComp.querySelectorAll('.confirmation-details').length).toEqual(1);
    expect(containerComp.querySelectorAll('.confirmation-instr').length).toEqual(1);
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import Confirmation from '@components/generic-components/Confirmation';

describe('Testing Confirmation Component', () => {
  let containerComp;
  beforeEach(() => {
    const { container } = render(<Confirmation />);
    containerComp = container;
  });
  it('Confirmation component should render', () => {
    expect(containerComp).toMatchSnapshot();
  });

  it('Should load two buttons', () => {
    expect(containerComp.querySelectorAll('button').length).toEqual(2);
  });

  it.only('Should have confirmation header and body', () => {
    expect(containerComp.querySelectorAll('.confirm-warning-header').length).toEqual(1);
    expect(containerComp.querySelectorAll('.confirmation-body').length).toEqual(1);
  });
});

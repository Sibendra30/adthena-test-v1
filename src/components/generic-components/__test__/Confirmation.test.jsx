import React from 'react';
import { render } from '@testing-library/react';
import Confirmation from '@components/generic-components/Confirmation';

describe('Testing Confirmation Component', () => {
  it('Confirmation component should render', () => {
    const { container } = render(<Confirmation />);
    expect(container).toMatchSnapshot();
  });

  it('Should load two buttons', () => {
    const { container } = render(<Confirmation />);
    expect(container.querySelectorAll('button').length).toEqual(2);
  });

  it.only('Should have confirmation header and body', () => {
    const { container } = render(<Confirmation />);
    expect(container.querySelectorAll('.confirm-warning-header').length).toEqual(1);
    expect(container.querySelectorAll('.confirmation-body').length).toEqual(1);
  });
});

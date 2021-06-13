import React from 'react';
import { render } from '@testing-library/react';
import DataLoader from '../DataLoader';

describe('Testing Data Loader Component', () => {
  it('Loader image should render', () => {
    const { container } = render(<DataLoader />);
    expect(container).toMatchSnapshot();
  });

  it('Loader image should be present', () => {
    const { getByAltText } = render(<DataLoader />);
    expect(getByAltText('Loading')).not.toBeNull();
  });
});

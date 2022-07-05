import React from 'react';
import { render } from '@testing-library/react';
import TodoFooter from './TodoFooter';

test('renders correctly', () => {
  const tree = render(<TodoFooter />);
  expect(tree).toMatchSnapshot()
});

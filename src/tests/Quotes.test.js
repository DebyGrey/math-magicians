import { render } from '@testing-library/react';
import Quotes from '../routes/Quotes';

test('renders Quotes correctly', () => {
  const { container } = render(<Quotes />);
  expect(container).toMatchSnapshot();
});

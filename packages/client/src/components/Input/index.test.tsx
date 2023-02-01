import React from 'react'
import { fireEvent, render } from "@testing-library/react";
import Input from '.';

describe('Input', () => {
  test('should render component', async () => {
    const { findByText } = render(<Input type='text' label='Test' touched />);
    const input = await findByText('Test');
    expect(input).toMatchSnapshot();
  });

  test('should handle onInput event', () => {
    const { container } = render(<Input type='text' label='Test' touched />);
    const input = container.getElementsByTagName('input')[0];
    expect(input.value).toBe('');
    fireEvent.input(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');
  });
});
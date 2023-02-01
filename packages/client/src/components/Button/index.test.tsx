import React from 'react'
import { fireEvent, render } from "@testing-library/react";
import Button from '.';

describe('Button', () => {
  test('should render component', async () => {
    const { findByText } = render(<Button text='Test' />);
    const btn = await findByText('Test');
    expect(btn).toMatchSnapshot();
  });

  test('should call onClick method', async () => {
    const mockCallBack = jest.fn();
    const { findByText } = render(<Button onClick={mockCallBack} text='Test' />);
    const btn = await findByText('Test');
    expect(mockCallBack.mock.calls.length).toBe(0);
    fireEvent.click(btn, 'Test');
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
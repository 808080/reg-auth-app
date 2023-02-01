import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputError from '.';

describe('InputError', () => {
  test('should be invisible if had no interactions', async () => {
    const { rerender } = render(<InputError touched={false} error='some error' />);
    expect(screen.getByText('some error')).not.toBeVisible();
    rerender(<InputError touched error='some error' />)
    expect(screen.getByText('some error')).toBeVisible();
  });
});
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { enableFetchMocks } from 'jest-fetch-mock';
import App from '../App';
import { renderWithProviders } from '../utils/test-utils';
import { store } from '../store';

enableFetchMocks();

describe('Router', () => {
  test('Home and Registration pages rendering', async () => {
    const state = store.getState();
    renderWithProviders(<App />, { store: state });
    const user = userEvent.setup({ document });
    expect(screen.getByText('Sign in')).toBeInTheDocument();
    const regLink = screen.getByText('Sign up').closest('a')!;
    await user.click(regLink);
    expect(screen.getByText('Full name')).toBeInTheDocument();
  })
});
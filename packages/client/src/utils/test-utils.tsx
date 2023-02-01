import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { RootState, store as globalStore } from '../store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: RootState
};

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = globalStore.getState(),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={globalStore}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
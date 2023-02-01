import React from 'react'
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WarnModal from '.';
import { store } from '../../store';
import { setWarn } from '../../store/reducers/warn';
import { renderWithProviders } from '../../utils/test-utils';
import { act } from 'react-test-renderer';

describe('Warn', () => {
  test('should be visible when warning text is set to the store', () => {
    const state = store.getState();
    renderWithProviders(<WarnModal />, { store: state });
    act(() => {
      store.dispatch(setWarn(''));
    });
    expect(screen.getByText('Ok')).not.toBeVisible();
    act(() => {
      store.dispatch(setWarn('!!!'));
    });
    expect(screen.getByText('Ok')).toBeVisible();
    expect(screen.getByText('!!!')).toBeVisible();
  })
});
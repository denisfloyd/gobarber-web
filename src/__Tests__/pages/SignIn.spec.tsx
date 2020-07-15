import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/auth', () => {
  return {
    useAuth: () => ({
      sighIn: jest.fn(),
    }),
  };
});

describe('SignIn Page', () => {
  it('should be able to sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('E-mail');
    const passwordField = getByPlaceholderText('password');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, {
      target: { value: 'denisladeira1@gmail.com' },
    });
    fireEvent.change(passwordField, {
      target: { value: '123456' },
    });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockHistoryPush).toHaveBeenCalledWith('/dashboard');
    });
  });
});

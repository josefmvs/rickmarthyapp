import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache()
});

test('app renders without error', () => {
  render(<ApolloProvider client={client}><BrowserRouter><App /></BrowserRouter></ApolloProvider>);
  const linkElement = screen.getByText(/Rick and Morty App/i);
  expect(linkElement).toBeInTheDocument();
});

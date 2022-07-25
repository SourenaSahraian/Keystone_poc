import 'tailwindcss/tailwind.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useMemo } from 'react';



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const client = useMemo(
    () =>
      new ApolloClient({
        cache: new InMemoryCache(),
        uri:
          typeof window === undefined
            ? 'http://localhost:3000/api/graphql'
            : '/api/graphql',
      }),
    []
  );
  return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;

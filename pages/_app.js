import 'tailwindcss/tailwind.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SessionProvider } from "next-auth/react"
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
        <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
        </SessionProvider>
    </ApolloProvider>
  );
}
export default MyApp;

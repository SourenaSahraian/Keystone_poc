import 'tailwindcss/tailwind.css';
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink } from '@apollo/client';
import { SessionProvider } from "next-auth/react"
import { useMemo } from 'react';



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const client = useMemo(
    () =>
      new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
          uri: process.env.GQL_SERVER_URL,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
      }),
        
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

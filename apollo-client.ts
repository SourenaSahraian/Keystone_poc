import { ApolloClient, DataProxy, InMemoryCache } from '@apollo/client';

class ApServerClient {

  private static instance: ApServerClient;
  private apClient :DataProxy;

  private constructor() {
    this.apClient = new ApolloClient({
      uri: process.env.GQL_SERVER_URL,
      cache: new InMemoryCache(),
    });
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new ApServerClient();
    }
    return this.instance;
  }
   get client(){
    return this.apClient;
  }
}

export default ApServerClient.getInstance();

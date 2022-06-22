import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oii70v08ys01z40jggadl8/master',
  cache: new InMemoryCache()
})
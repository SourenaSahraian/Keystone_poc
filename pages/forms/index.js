import { gql } from '@apollo/client'
import apServer from "../../apollo-client"
import React from 'react'
import { ApolloClient, DataProxy, InMemoryCache } from '@apollo/client';

const getForms = gql`
	query{
    forms{
    displayName,
    description,
      editor{
        name
      }
    }
  }

`

//TODO
function forms({forms}) {

console.log('recieved forms', forms);

  return (
    <div>forms</div>
  )
}

export async function getStaticProps() {
    
    const { data } = await apServer.client.query({
      query: gql`
        query Forms {
            forms{
            displayName,
            description,
            editor{
                name
            }
          }
        }
      `,
    });

    console.log(' hey -------- :', data)
    return {
      props: {
        forms:data,
      },
   };
}
export default forms
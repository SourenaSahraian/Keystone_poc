import {  gql, useQuery  } from '@apollo/client'
import React from 'react'

const getUsers = gql`
query{
  users{
  id,
  name,
  email
  }
}
`;

function dashboard() {
  const {data, error} = useQuery(getUsers);
  console.log('data :' , data , ' error : ,',error)
  return (
    <>
     <div>Hi from Dashboard</div>
     <h2>User's list :</h2>
      <ul>
        {data && data?.users?.map((user)=> (
          <li> <span> {user.name} - {user.email}  </span> </li>
        ))}
      </ul>
    </>
 
  )
}

export default dashboard
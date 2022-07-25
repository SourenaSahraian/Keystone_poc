import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"

function Navbar() {

  const { data:session } = useSession()
  return (
    <>

    <div className=''>
    { !session && <button onClick = {signIn}> Signin</button> }
    { session && <button onClick = {signOut}> Signout</button> }
    </div>
    </>
  )
}

export default Navbar
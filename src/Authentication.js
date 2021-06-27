 import React from 'react'
import { useMoralis } from 'react-moralis'

function Authentication() {
   const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    logout,
    user,
  } = useMoralis()

  if (isAuthenticated) {
    return (
      <container>
        <h1>/*  */
          Welcome to Arrow-matic,{' '}
          {user.attributes.username}
        </h1>
        <button onClick={() => logout()}>
          Logout
        </button>
      </container>
    )
  }

  return (
    <div>
      Polygon arrow-matic. You need a meta-mask
      extension to log in.
      <button
        isLoading={isAuthenticating}
        onClick={() => authenticate()}
      >
        Authenticate via Metamask
      </button>
    </div>
  )
} 

export default Authentication
 
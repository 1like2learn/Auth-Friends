import React from 'react'

export default function Login() {
  return (
    <>
      <form>
        <label>Username:
          <input 
            name="username"
          />
        </label>
        <label>Password:
          <input 
            name="password"
          />
        </label>
        <button>Login</button>
      </form>
    </>
  )
}
import React from 'react'

export default function AddFriend() {
  return (
    <>
      <form>
        <label>Name:
          <input 
            name="name"
          />
        </label>
        <label>Age:
          <input 
            name="age"
          />
        </label>
        <label>Email:
          <input 
            name="email"
          />
        </label>
        <button>Login</button>
      </form>
    </>
  )
}
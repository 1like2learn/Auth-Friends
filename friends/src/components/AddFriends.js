import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const friendDefaultData = {
  name: '',
  age: '',
  email: '',
}



export default function AddFriend() {
  const [ newFriend, setNewFriend ] = useState(friendDefaultData)

  const handleChange = event => {
    setNewFriend({
        ...newFriend,
        [event.target.name]: event.target.value
    });
  };
  const submitNewFriend = event => {
    event.preventDefault()
    axiosWithAuth()
    .post('/api/friends', newFriend)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <div>
      <form onSubmit={submitNewFriend}>
        <label>Name:
          <input 
            name="name"
            value={newFriend.name}
            onChange={handleChange}
          />
        </label>
        <label>Age:
          <input 
            name="age"
            onChange={handleChange}
            value={newFriend.age}
          />
        </label>
        <label>Email:
          <input 
            name="email"
            onChange={handleChange}
            value={newFriend.email}
          />
        </label>
        <button>Login</button>
      </form>
    </div>
  )
}
import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const startFriendData =[
  {
    id: 1,
    name: 'Joe',
    age: 24,
    email: 'joe@lambdaschool.com',
  }
]

export default function Friends() {
  const [ friends, setFriends ] = useState(startFriendData)

  const deleteFriend = id => {
    axiosWithAuth()
    .delete(`/api/friends/${id}`)
    .then(response => {
      console.log(response)
      setFriends(friends.filter(friend => friend.id !== id))
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    axiosWithAuth()
    .get('/api/friends')
    .then(response => {
      console.log("axios friends get response", response)
      setFriends(response.data)
    })
  }, [])

  return (
    <>
      {friends.map(friend => {
        const { name, age, email, id } = friend
        return(
          <div key={id}>
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{email}</p>
            <button onClick={() => deleteFriend(id)}>Delete Friend</button>
          </div>
        )
      })}
    </>
  )
}
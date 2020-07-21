import React, { useState } from 'react'

export default function Friends() {
const [ friends, setFriends ] = useState([])
  return (
    <>
      {friends.map(friend => {
        return(
          <>
            <h3>{friend.name}</h3>
            <p>{age}</p>
            <p>{email}</p>
          </>
        )
      })}
    </>
  )
}
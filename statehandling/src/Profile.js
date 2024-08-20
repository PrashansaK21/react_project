import React,{useState}from 'react'

export default function Profile() {
    const [loggedIn, setLoggedIn] = useState(2)
  return (
    <div>
        {loggedIn == 1 ?
        <h1>Welcome User 1</h1>
        : loggedIn == 2 ? <h1>Welcome User 2</h1>
          : <h1>Welcome User 3</h1>}


    
    </div>
  )
}

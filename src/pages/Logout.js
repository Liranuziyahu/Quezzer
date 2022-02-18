import React from 'react'

const Logout = () => {

const Logout = (()=>{ 

    window.localStorage.removeItem('currentUser');
    window.location.reload();
})

  return (
    <button onClick={()=>Logout()}>Logout</button>
  )
}

export default Logout
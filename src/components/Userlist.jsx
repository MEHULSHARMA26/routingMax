import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const Userlist = () => {
  return (
    <div>
        <ul>
           <li>User1 <Link to= "1">View1</Link> </li>
            <li>user2 <Link to= "2">View2</Link> </li>
            <li>user3 <Link to= "3">View3</Link> </li>
            <li>user4 <Link to= "4">View4</Link> </li>
            <li>user5 <Link to= "5">View5</Link> </li>
        </ul>
        <Outlet />
    </div>

  )
}

export default Userlist
import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
export default function Navbar() {
  const token =localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <>
         <nav>
    <div className="nav-wrapper #673ab7 deep-purple">
        <Link to="/" className="brand-logo left">Quote App</Link>
        <ul id="nav-mobile" className="right">
        {
          token ?
          <>
          <li><Link to="/profile">profile</Link></li>
        <li><Link to="/create">create</Link></li>
        <li><button className='red btn' onClick={()=>{localStorage.removeItem('token')
        navigate('/login')}}>Logout</button></li>
        </> : <>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/signup">signUp</Link></li>
        </>
        }


        </ul>

    </div>
</nav>
    </>
  )
}

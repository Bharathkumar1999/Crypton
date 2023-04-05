import React from 'react'

import { Link } from 'react-router-dom'

const links=[
  {path:"/", title:"HomeScreen"},
  {path:"/course", title:"CourseApp"},
  {path:"/transaction", title:"Transaction"},
  {path:"/widget", title:"Widget"},
]




const Navbar = () => {
  return (
    <div style={{width:'80%',margin:'auto',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
        {links.map((link)=>(
            <Link key={link.path} to={link.path}>{link.title}</Link>
        ))}
    </div>
  )
}

export default Navbar
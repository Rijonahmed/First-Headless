import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
  const auth = localStorage.getItem('user');
  const manuItem = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/'>Resume</Link></li>
  <li><Link to='/'> About</Link></li>
 
  

 

</>
    return (
      <div className='sticky top-0 z-10'>
      <div className="navbar bg-cyan-500 text-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">

              {manuItem}

            </ul>
          </div>
          <Link className="text-red-500 text-2xl font-bold" to='/' ><span className='text-black font-bold text-2xl'>WordPress </span> React</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {manuItem}

          </ul>
          
        </div>

        <div className="navbar-end">
        <ul className="menu menu-horizontal p-0">

          {
            auth ? (<li><Link to='/addpost'>Add Post</Link></li>)
            : <li><Link to='/login'>LogIn</Link></li>
          }
         
         

          </ul>
      
      
      

        </div>
      </div>

    </div >
    );
};

export default Navber;
import React from "react";
import { Link } from 'react-router-dom'

function Nav({search , setSearch}) {
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()} >
        <label htmlFor="search" >Search posts</label>
        <input
          id="search"
          type="text"
          placeholder="search post"
          value={search}
          onChange={(e) => e.preventDefault()}
        />
      </form>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/post" >Post</Link></li>
        <li><Link to="/about" >About</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

import React from 'react'
import Menu from './Menu';
import MenuLikes from './MenuLikes';
import Input from './Input';
import { Link } from 'react-router-dom';
import SearchList from './SearchList';

export default function Icon() {
  return (
    <div className="search">
    <Link to='/'><i className="fa fa-times fa-2x top-bar" aria-hidden="true"></i></Link>

    <MenuLikes />
   
        <Menu />
        <Input />
        <SearchList />
    </div>
  )
}

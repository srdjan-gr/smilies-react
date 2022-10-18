import React from 'react'

//Styling
import './Search.css'
import { IoCloseOutline } from 'react-icons/io5'

const Search = ({search, setSearch}) => {

const closeSearch = () => {
     setSearch(!search);
}

  return (
    <div className={`${search ? 'searchActive' : ''} search`}>
        <span><IoCloseOutline className="closeSearch"
            onClick={closeSearch} /></span>

        <form action="">
            <input type="text" placeholder="Search..." />
        </form>
    </div>
  )
}

export default Search
import {CiSearch} from 'react-icons/ci'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function  SearchBar (props) {

    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchText.trim() !== '') {
    
          navigate(`/search?q=${encodeURIComponent(searchText)}`);
        //   /posts/search?text=
        } else {
          alert('Please enter valid text.');
        }
      };

    return (
        <div className="SearchInput">
            <input type='search'
                   label="Enter your text"
                   placeholder="Search..."
                   value={searchText}
                   onChange={(e) => setSearchText(e.target.value)}/>
            <button className="btn-search" onClick={handleSearch}><CiSearch/></button>
        </div>
    )
}
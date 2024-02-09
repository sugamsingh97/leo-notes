import { MdSearch } from 'react-icons/md'
const Search = ({changeHandler}) => {
    return <div className="search">
        <MdSearch className="search-icons" size='1.3rem'/>
        <input type='text' onChange={(event)=> changeHandler(event.target.value)} placeholder='search your notes'/>
    </div>
}
export default Search;
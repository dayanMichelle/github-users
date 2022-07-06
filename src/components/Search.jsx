import styles from '../styles/Search.module.css'

const Search = ({setSearch,search,handleGetData,setData}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    handleGetData(search)
    setData([])
  }
  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input value={search} onChange={(e)=> {setSearch(e.target.value)}} type='text' placeholder='Search GitHub username...'/>
        <button  type="submit">Search</button>
      </form>

    </div>
  );
};

export default Search;

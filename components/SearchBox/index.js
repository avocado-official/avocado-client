import { BiSearch } from 'react-icons/bi'

import styles from '../../styles/search.module.scss'

const Search = () => {
  return (
    <>
      <div className={styles.inputBox}>
        <span className={styles.prefix}>
          <BiSearch />
        </span>
        <input type='search' placeholder='اینجا سرچ کنید.' />
      </div>
    </>
  )
}

export default Search

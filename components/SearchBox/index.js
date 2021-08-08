import { BiSearch } from 'react-icons/bi'

import styles from '../../styles/search.module.scss'

import * as Routes from '../../staticRes/routePath'
import { useRouter } from 'next/router'

const Search = (props) => {
  const router = useRouter()

  if (router.asPath == Routes.home) {
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
  } else {
    return <div></div>
  }
}

export default Search

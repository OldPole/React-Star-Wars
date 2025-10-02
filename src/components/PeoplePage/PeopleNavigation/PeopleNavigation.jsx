import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({ 
    getResources, 
    nextPage, 
    prevPage, 
    curPage 
}) => {

    const handlePrevPage = () => getResources(prevPage);

    const handleNextPage = () => getResources(nextPage);

    return (
        <div>
            <h1 className='header__text'>Navigation</h1>
            <Link to={`/people/?page=${curPage - 1}`} className={styles.link}>
                <button 
                    className={styles.button}
                    onClick={handlePrevPage}
                    disabled={!prevPage}
                >Previous</button>
            </Link>
            <Link to={`/people/?page=${curPage + 1}`} className={styles.link}>
                <button 
                    className={styles.button}
                    onClick={handleNextPage}
                    disabled={!nextPage}
                >Next</button>
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResources: PropTypes.func,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
    curPage: PropTypes.number
}

export default PeopleNavigation;
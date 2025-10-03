import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import UiButton from '@Ui/UiButton';

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
        <div className={styles.container}>
            <Link to={`/people/?page=${curPage - 1}`} className={styles.link}>
                <UiButton 
                    text='Previuos'
                    onClick={handlePrevPage} 
                    isDisabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${curPage + 1}`} className={styles.link}>
                <UiButton 
                    text='Next'
                    onClick={handleNextPage}
                    isDisabled={!nextPage}
                />
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
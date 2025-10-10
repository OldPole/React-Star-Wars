import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './SearchPageInfo.module.css';

const SearchPageInfo = ({ people }) => (
    <>
        {people.length 
            ? (
                <ul className={styles.container__list}>
                    {people.map(({id, name, img}) => (
                        <li className={styles.list__item} key={id}>
                            <Link to={`/people/${id}`}>
                                <img className={styles.person__img} src={img} alt={name} />
                                <p className={styles.person__name}>{name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )
            : <h2 className={styles.comment}>No results</h2>
        }
    </>
)

SearchPageInfo.propTypes = {
    people: PropTypes.array,
}

export default SearchPageInfo;
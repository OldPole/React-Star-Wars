import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setPersonToFavorite, removePersonToFavorite } from '@store/actions';

import styles from './PersonImg.module.css';

const PersonImg = ({ 
    personId, 
    personImg, 
    personName 
}) => {
    const dispatch = useDispatch();

    const set = () => {
        dispatch(setPersonToFavorite({
            [personId]: {
                personName,
                personImg,
            }
        }));
    }

    const remove = () => {
        dispatch(removePersonToFavorite({
            personId
        }))
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.img} src={personImg} alt={personName} />
            </div>
            <button onClick={set}>Add</button>
            <button onClick={remove}>Remove</button>
        </>
    )
}

PersonImg.propTypes = {
    personId: PropTypes.string,
    personImg: PropTypes.string,
    personName: PropTypes.string,
}

export default PersonImg;
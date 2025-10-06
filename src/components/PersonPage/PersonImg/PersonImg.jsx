import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setPersonToFavorite, removePersonToFavorite } from '@store/actions';

import favoriteFill from './img/favorite-fill.svg';
import favorite from './img/favorite.svg';

import styles from './PersonImg.module.css';

const PersonImg = ({ 
    personId, 
    personImg, 
    personName,
    personFavorite,
    setPersonFavorite
}) => {
    const dispatch = useDispatch();

    const dispatchPersonFavorite = () => {
        if (personFavorite) {
            dispatch(removePersonToFavorite(personId));
            setPersonFavorite(false);
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    personName,
                    personImg,
                }
            }));
            setPersonFavorite(true);
        }
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.img} src={personImg} alt={personName} />
                <img 
                    src={personFavorite ? favoriteFill : favorite}
                    onClick={dispatchPersonFavorite}
                    className={styles.favorite}
                    alt="add to favorite"
                />
            </div>
        </>
    )
}

PersonImg.propTypes = {
    personId: PropTypes.string,
    personImg: PropTypes.string,
    personName: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
}

export default PersonImg;
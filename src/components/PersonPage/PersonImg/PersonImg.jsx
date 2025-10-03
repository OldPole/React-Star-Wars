import PropTypes from 'prop-types';

import styles from './PersonImg.module.css';

const PersonImg = ({ personImg, personName }) => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.img} src={personImg} alt={personName} />
            </div>
        </>
    )
}

PersonImg.propTypes = {
    personImg: PropTypes.string,
    personName: PropTypes.string,
}

export default PersonImg;
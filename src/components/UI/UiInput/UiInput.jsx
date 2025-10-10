import PropTypes from 'prop-types';
import cn from 'classnames';

import clearImg from './img/cancel.svg';

import '../index.css';
import styles from './UiInput.module.css';

const UiInput = ({
    value,
    handleInputChange,
    placeholder,
    classes
}) => (
    <div className={cn(styles.wrapper__input, classes)}>
        <input 
            type="text"
            value={value}
            onChange={e => handleInputChange(e.target.value)}
            placeholder={placeholder} 
            className={styles.input}
        />
        <img 
            onClick={() => value && handleInputChange('')}
            src={clearImg} 
            alt="Clear" 
            className={cn(styles.clear, !value && styles.clear__disaibled)}
        />
    </div>
)

UiInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
}

export default UiInput;
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './UiButton.module.css';
import '../index.css';

const UiButton = ({
    text,
    onClick,
    isDisabled,
    theme='dark',
    classes
}) => {
    return (
        <button 
            className={cn(styles.button, styles[theme], classes)}
            onClick={onClick}
            disabled={isDisabled}
        >{text}</button>
    )
}

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string,
}

export default UiButton
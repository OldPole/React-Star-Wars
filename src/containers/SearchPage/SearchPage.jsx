import { useState } from 'react';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResources } from '@utils/network';
import { API_SEARCH } from '@constants/api';

import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');

    const getResources = async param => {
        const res = await getApiResources(API_SEARCH + param);

        if (res) {
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    const handleInputChange = (event) => {
        const value = event.target.value;

        setInputSearchValue(value);
        getResources(value);
    }

    return (
        <>
            <h1 className="header__text">Search Page</h1>
            <input 
                type="text"
                value={inputSearchValue}
                onChange={handleInputChange}
                placeholder="Input characters's name"
            />
        </>
    )
}

export default withErrorApi(SearchPage);
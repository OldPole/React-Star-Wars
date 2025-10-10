import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import UiInput from '@components/UI/UiInput';
import { getApiResources } from '@utils/network';
import { getPeopleId, getPeopleImg } from '@services/getPeopleData';
import { API_SEARCH } from '@constants/api';

import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);

    const getResponse= async param => {
        const res = await getApiResources(API_SEARCH + param);

        if (res) {
            const peoplePromises = res.results.map( async ({ name, url }) => {
                const id = getPeopleId(url);
                const img = await getPeopleImg(id);
                return {
                    id,
                    name,
                    img
                }
            })

            const peopleList = await Promise.all(peoplePromises);

            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResponse('');
    }, [])

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 300),
        []
    )

    const handleInputChange = value => {
        setInputSearchValue(value);
        debouncedGetResponse(value);
    }

    return (
        <>
            <h1 className="header__text">Search Page</h1>
            
            <UiInput 
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Input characters's name"
                classes={styles.input__search}
            />

            <SearchPageInfo people={people} />
        </>
    )
}

SearchPage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(SearchPage);
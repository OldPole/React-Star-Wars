import { useEffect } from 'react';
import { getApiResources } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';

import styles from './PeoplePage.module.css';

const PeoplePage = () => {
    const getResources = async (url) => {
        const body = await getApiResources(url);
        console.log(body);
    }

    useEffect(() => {
        getResources(API_PEOPLE);
    }, []);

    return (
        <>People</>
    )
}

export default PeoplePage;
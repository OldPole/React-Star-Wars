import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import  PropTypes from 'prop-types';

import PersonImg from '@components/PersonPage/PersonImg';
import PersonInfo from '@components/PersonPage/PersonInfo';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResources } from '@utils/network';
import { getPeopleImg } from '@services/getPeopleData';
import { API_PERSON } from '@constants/api';

import styles from './PersonPage.module.css';

const PersonPage = ({ setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personImg, setPersonImg] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const res = await getApiResources(`${API_PERSON}/${id}`);
            console.log(res);

            if (res) {
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair Color', data: res.hair_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Eye color', data: res.eye_color},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ]);

                setPersonName(res.name)
                setPersonImg(await getPeopleImg(id));

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })()
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>

                <div className={styles.container}>
                    <PersonImg personImg={personImg} personName={personName}/>

                    {personInfo && <PersonInfo personInfo={personInfo}/>}
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);


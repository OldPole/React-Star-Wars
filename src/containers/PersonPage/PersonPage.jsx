import React, { useState, useEffect, Suspense } from 'react'
import { useParams } from 'react-router-dom';
import  PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import PersonImg from '@components/PersonPage/PersonImg';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import UiLoading from '@Ui/UiLoading';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResources } from '@utils/network';
import { getPeopleImg } from '@services/getPeopleData';
import { API_PERSON } from '@constants/api';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'));

const PersonPage = ({ setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personImg, setPersonImg] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    const { id } = useParams();

    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        (async () => {
            const res = await getApiResources(`${API_PERSON}/${id}`);

            setPersonFavorite(!!storeData[id]);

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

                res.films.length && setPersonFilms(res.films);

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })()
    }, []);

    return (
        <>
            <PersonLinkBack/>

            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>

                <div className={styles.container}>
                    <PersonImg 
                        personId={id} 
                        personImg={personImg} 
                        personName={personName}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo}/>}

                    {personFilms &&
                        <Suspense fallback={<UiLoading/>}>
                            <PersonFilms personFilms={personFilms}/>
                        </Suspense>
                    }
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);


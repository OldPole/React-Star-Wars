import { SWAPI_ROOT, SWAPI_PEOPLE, AKABAB_ROOT, JSON } from '../constants/api';
import { getApiResources } from '../utils/network';

const getId = (url, category) => {
    const id = url
        .replace(SWAPI_ROOT + SWAPI_PEOPLE, '')
        .replace(/\//g, '');

    return id;
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImg = async (id) => {
        const url = AKABAB_ROOT + id + JSON;
        const res = await getApiResources(url);
        return res && res.image;
}
import { getApiResources } from '@utils/network';
import {
    SWAPI_ROOT, SWAPI_PEOPLE, 
    AKABAB_ROOT, JSON, IMG_NOT_FOUND, SWAPI_PAGE_PARAM 
} from '@constants/api';

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
        return res ? res.image : IMG_NOT_FOUND;
}

export const getPeoplePageId = (url) => {
    const pos = url.lastIndexOf(SWAPI_PAGE_PARAM);
    const page = url.slice(pos + SWAPI_PAGE_PARAM.length);
    return +page;
}
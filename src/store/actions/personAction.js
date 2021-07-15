import { SET_DATA, SET_LINK } from '../actionTypes';
import axios from 'axios';

export function setData(data) {
    return {
        type: SET_DATA,
        payload: data
    }
}

export function setLink(link) {
    return {
        type: SET_LINK,
        payload: link
    }
}

export function search(name) {
    return (dispatch, getState) => {
        // Hit the Google Search API
        axios({
            method: `GET`,
            url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${name}&num=10`,
            headers: {
                'x-rapidapi-key': `361355c6eamsh57e5f525310fe7fp19b07djsn68f61de4f1cb`,
                'x-rapidapi-host': 'google-search3.p.rapidapi.com'
            }
        })
        .then((response) => {
            dispatch(setData(response.data.results));
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
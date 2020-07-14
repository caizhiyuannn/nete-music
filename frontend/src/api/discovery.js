import { request } from '@/utils';

export const getBanner = () => request.get('/banner?type=0');

export const getPersonalized = () => request.get('/personalized?limit=10');

export const getPrivateContent = () =>
request.get('/personalized/privatecontent/list?limit=4');


export const getNewSong = () => request.get('/personalized/newsong')
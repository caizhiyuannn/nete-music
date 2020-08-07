const { request } = require('@/utils');

export const getAllRelated = (id) => request.get(`/related/allvideo?id=${id}`);
// mv
export const getMVDetail = (id) => request.get(`/mv/detail?mvid=${id}`);

export const getMVURL = (id) => request.get(`/mv/url?id=${id}`);

export const getMVComments = (id) => request.get(`/comment/mv?id=${id}`);

// video
export const getVideoDetail = (id) => request.get(`/video/detail?id=${id}`);

export const getVideoURL = (id) => request.get(`/video/url?id=${id}`);

export const getVideoComments = (id) => request.get(`/comment/video?id=${id}`);

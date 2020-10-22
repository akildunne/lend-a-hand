import api from './api-config';

export const getAllCauses = async () => {
  const resp = await api.get('/causes');
  return resp.data;
}

export const getUserCause = async () => {
  const resp = await api.get(`/usercause`);
  return resp.data;
}

export const getOneCause = async (id) => {
  console.log(id)
  const resp = await api.get(`/causes/${id}`);
  return resp.data;
}
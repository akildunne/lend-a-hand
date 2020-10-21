import api from './api-config';

export const getAllCauses = async () => {
  const resp = await api.get('/causes');
  return resp.data;
}
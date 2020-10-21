import api from './api-config'

export const getAllEvents = async () => {
  const resp = await api.get('/events');
  return resp.data;
}

export const getOneEvent = async (id) => {
  console.log(id)
  const resp = await api.get(`/events/${id}`);
  return resp.data;
}

export const postEvent = async (eventData) => {
  const resp = await api.post('/eventss', {event: eventData});
  return resp.data;
}

export const putEvent = async (id, eventData) => {
  const resp = await api.put(`/events/${id}`, {event: eventData});
  return resp.data;
}

export const destroyEvent = async (id) => {
  const resp = await api.delete(`/events/${id}`);
  return resp;
}

// not sure if I need this one
export const addCause = async(eventId, causeId) => {
  const resp = await api.put(`/causes/${causeId}/events/${eventId}`);
  return resp.data;
}
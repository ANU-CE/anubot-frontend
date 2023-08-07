import { client } from './client';


/**
 * @response
 * createdDateTime
 * feedback
 * id
 * message
 * reply
 * user
 * userId
 */
export const sendMessage = (data) => {
  return client.post("/Chats", data).then(data => data);
}

export const fetchMessage = (id) => {
  return client.get(`/messages/${id}`).then((data) => data);
}
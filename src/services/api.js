// Todo separete out service layer

import { BASE_URL } from "../utils/constants";

export const getMessages = (pageToken) => {
	const queryParam = pageToken ? `?pageToken=${pageToken}` : "";
	return fetch(`${BASE_URL}/messages${queryParam}`).then((res) => res.json());
};

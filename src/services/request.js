import { BASE_URL } from "../const/endpoints";

const request = {
  get(url) {
    return fetch(`${BASE_URL}${url}`).then((res) => res.json());
  },
  post(url, body) {
    return fetch(`${BASE_URL}${url}`, { body, method: "POST" }).then((res) =>
      res.json()
    );
  },
};

export default request;

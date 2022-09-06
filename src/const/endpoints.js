export const BASE_URL = "https://wizard-world-api.herokuapp.com";

const ENDPOINTS = {
  SPELLS: {
    SPELL: (id) => `/spells/${id}`,
    SPELLS: () => "/spells",
  },
};

export default ENDPOINTS;

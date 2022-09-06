import ENDPOINTS from "../const/endpoints";
import request from "../services/request";

export const getSpells = () => {
  return request.get(ENDPOINTS.SPELLS.SPELLS());
};

export const getSpell = (id) => {
  return request.get(ENDPOINTS.SPELLS.SPELL(id));
};

export const createSpell = (spell) => {
  return request.post(ENDPOINTS.SPELLS.SPELL(), spell);
};

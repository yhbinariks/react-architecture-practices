export const getSpells = () => {
  return fetch("https://wizard-world-api.herokuapp.com/spells").then((res) =>
    res.json()
  );
};

export const getSpell = (id) => {
  return fetch(`https://wizard-world-api.herokuapp.com/spells/${id}`).then(
    (res) => res.json()
  );
};

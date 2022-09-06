import { useState } from "react";

export default function () {
  const [selectedSpell, setSelectedSpell] = useState(null);
  const [favouriteSpell, setFavouriteSpell] = useState(null);

  const onSpellSelect = (spell) => {
    setSelectedSpell(spell);
  };

  const unselect = () => {
    setSelectedSpell(null);
  };

  const onFavouriteSpellSelect = (spell) => {
    setFavouriteSpell(spell);
  };

  return {
    selectedSpell,
    favouriteSpell,
    onSpellSelect,
    unselect,
    onFavouriteSpellSelect,
  };
}

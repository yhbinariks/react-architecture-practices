import React, { useState } from "react";
import SpellList from "./Spells/SpellList";
import FavouriteSpell from "./Spells/FavouriteSpell";
import SpellInfo from "./Spells/SpellInfo";
import "./App.css";

function App() {
  const [selectedSpell, setSelectedSpell] = useState(null);
  const [favouriteSpell, setFavouriteSpell] = useState(null);

  const onSpellSelect = (spell) => {
    setSelectedSpell(spell);
  };

  const onBack = () => {
    setSelectedSpell(null);
  };

  const onFavouriteSpellSelect = (spell) => {
    setFavouriteSpell(spell);
  };

  if (selectedSpell) {
    return (
      <SpellInfo
        id={selectedSpell.id}
        onBack={onBack}
        onMakeFavourite={onFavouriteSpellSelect}
      />
    );
  }

  return (
    <>
      {favouriteSpell && (
        <FavouriteSpell
          id={favouriteSpell.id}
          onUndoFavourite={() => onFavouriteSpellSelect(null)}
        />
      )}
      <SpellList onSpellSelect={onSpellSelect} />;
    </>
  );
}

export default App;

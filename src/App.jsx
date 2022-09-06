import React from "react";
import SpellList from "./Spells/SpellList";
import FavouriteSpell from "./Spells/FavouriteSpell";
import SpellInfo from "./Spells/SpellInfo";
import "./App.css";
import useSpellSelection from "./hooks/useSpellSelection";

function App() {
  const {
    selectedSpell,
    unselect,
    onFavouriteSpellSelect,
    onSpellSelect,
    favouriteSpell,
  } = useSpellSelection();

  if (selectedSpell) {
    return (
      <SpellInfo
        id={selectedSpell.id}
        onBack={unselect}
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

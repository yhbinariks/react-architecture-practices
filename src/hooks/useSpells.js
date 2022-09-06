import { useState, useEffect } from "react";

export default function () {
  const [spells, setSpells] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://wizard-world-api.herokuapp.com/spells")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setSpells(data);
      });
  }, []);

  return {
    spells,
    isLoading,
  };
}

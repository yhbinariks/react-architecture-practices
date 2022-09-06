import { useState, useEffect } from "react";

export default function (id) {
  const [spell, setSpell] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://wizard-world-api.herokuapp.com/spells/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setSpell(data);
      });
  }, [id]);

  return {
    spell,
    isLoading,
  };
}

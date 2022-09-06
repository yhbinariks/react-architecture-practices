import { useState, useEffect } from "react";
import { getSpell } from "../api/spells";

export default function (id) {
  const [spell, setSpell] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSpell(id).then((data) => {
      setIsLoading(false);
      setSpell(data);
    });
  }, [id]);

  return {
    spell,
    isLoading,
  };
}

import { useState, useEffect } from "react";
import { getSpells } from "../api/spells";

export default function () {
  const [spells, setSpells] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSpells().then((data) => {
      setIsLoading(false);
      setSpells(data);
    });
  }, []);

  return {
    spells,
    isLoading,
  };
}

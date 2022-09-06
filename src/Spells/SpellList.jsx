import React from "react";
import { useState, useEffect } from "react";
import { Table } from "antd";

export default function SpellList({ onSpellSelect }) {
  const [spells, setSpells] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "type",
      title: "Type",
      dataIndex: "type",
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    fetch("https://wizard-world-api.herokuapp.com/spells")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setSpells(data);
      });
  }, []);

  return (
    <div>
      <h2>Spells:</h2>
      <Table
        columns={columns}
        dataSource={spells}
        loading={isLoading}
        onRow={(record) => ({ onClick: () => onSpellSelect(record) })}
      />
    </div>
  );
}

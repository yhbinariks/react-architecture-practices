import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import useSpells from "../hooks/useSpells";

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

export default function SpellList({ onSpellSelect }) {
  const { spells, isLoading } = useSpells();

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

SpellList.propTypes = {
  onSpellSelect: PropTypes.func.isRequired,
};

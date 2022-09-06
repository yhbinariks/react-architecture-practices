import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "antd";
import useSpell from "../hooks/useSpell";

export default function FavouriteSpell({ id, onUndoFavourite }) {
  const { spell, isLoading } = useSpell(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "4px",
      }}
    >
      <Button onClick={onUndoFavourite} type="primary">
        Unmake favourite
      </Button>
      This is my FAVOURITE SPELL
      <Row gutter={8}>
        <Col span={4}>Id: </Col>
        <Col span={8}>{spell.id}</Col>
      </Row>
      <Row gutter={8}>
        <Col span={4}>Name:</Col>
        <Col span={8}>{spell.name}</Col>
      </Row>
      <Row gutter={8}>
        <Col span={4}>Type:</Col>
        <Col span={8}>{spell.type}</Col>
      </Row>
      <Row gutter={8}>
        <Col span={4}>Effect:</Col>
        <Col span={8}>{spell.effect}</Col>
      </Row>
      <Row gutter={8}>
        <Col span={4}>Light:</Col>
        <Col span={8}>{spell.light}</Col>
      </Row>
      <Row gutter={8}>
        <Col span={4}>Can be verbal:</Col>
        <Col span={8}>{spell.canBeVerbal ? "Yes" : "No"}</Col>
      </Row>
    </div>
  );
}

FavouriteSpell.propTypes = {
  id: PropTypes.string.isRequired,
  onUndoFavourite: PropTypes.func.isRequired,
};

import React from "react";
import { useState, useEffect } from "react";
import { Button, Col, Row } from "antd";

export default function FavouriteSpell({ id, onBack, onUndoFavourite }) {
  const [spell, setSpell] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://wizard-world-api.herokuapp.com/spells/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setSpell(data);
      });
  }, [id]);

  if (isLoading || !spell) {
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

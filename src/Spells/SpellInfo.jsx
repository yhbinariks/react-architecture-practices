import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "antd";
import useSpell from "../hooks/useSpell";

export default function SpellInfo({ id, onBack, onMakeFavourite }) {
  const { spell, isLoading } = useSpell(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Row gutter={12}>
        <Col span={4}>
          <Button onClick={onBack}>Back</Button>
        </Col>
        <Col span={8}>
          <Button onClick={() => onMakeFavourite(spell)} type="primary">
            Make favourite
          </Button>
        </Col>
      </Row>
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

SpellInfo.propTypes = {
  id: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  onMakeFavourite: PropTypes.func.isRequired,
};

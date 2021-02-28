import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionGetArenas } from "./action";
import "./Arena.scss";
import { Row, Col, Input } from "antd";
import ItemArena from "./ItemArena";

const { Search } = Input;

const params = {
  page: 0,
  size: 10,
  isMyself: false,
};

const Arena = (props) => {
  console.log("Arena -> props", props);
  useEffect(() => {
    _getData(params);
  }, []);

  const _getData = (params) => {
    props.actionGetArenas(params);
  };
  return (
    <>
      <Row className="wp-search">
        <Col md={10}>
          <Search
            className="hello"
            placeholder="Tìm Kiếm ..."
            onSearch={(value) => console.log(value)}
            enterButton
          />
        </Col>
        <Col md={3} offset={9}>
          Sắp xếp
        </Col>
        <Col md={2}>Lọc</Col>
      </Row>
      <Row className="container-market">
        {props.arena.map((datas) => (
          <ItemArena data={datas} />
        ))}
      </Row>
    </>
  );
};

export default connect(
  (state) => ({
    arena: state.arenaReducer.arena,
    isFetching: state.arenaReducer.isFetching,
  }),
  { actionGetArenas }
)(Arena);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionGetMarkets } from "./actions";
import { Row, Col, Input } from "antd";
import ItemMarket from "./ItemMarket";
import "./home.scss";

const { Search } = Input;

const params = {
  page: 0,
  size: 10,
  isMyself: false,
};
const Home = (props) => {
  useEffect(() => {
    _getData(params);
  }, []);

  const _getData = (params) => {
    props.actionGetMarkets(params);
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
        {props.market.map((datas) => (
          <ItemMarket data={datas} />
        ))}
      </Row>
    </>
  );
};

export default connect(
  (state) => ({
    market: state.homeReducer.market,
    isFetching: state.homeReducer.isFetching,
  }),
  { actionGetMarkets }
)(Home);

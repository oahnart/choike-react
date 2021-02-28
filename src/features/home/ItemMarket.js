import React from "react";
import { BASE_URL } from "../../utils/constants/constant";
import { Col } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

const ItemMarket = (props) => {
  const { data } = props;
  const imgChicken = data.animal.images[0];

  const _handleItemMarket = (itemMarket) => {
    window.location.href = `#/market/detail-market/${itemMarket.id}`;
  };
  return (
    <Col
      onClick={() => _handleItemMarket(data)}
      className="item-market"
      span={8}
      md={8}
      xs={12}
      key={data.id}
    >
      <div className="img-body">
        <img
          className="img-big"
          alt="oke"
          src={`${BASE_URL}api/v1/file/image/${imgChicken.referenceName}`}
        />
      </div>
      <div className="title">{data.animal.name}</div>
      <div className="price-regular">
        {data.animal.originalPrice.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
      </div>
      <div>
        <EnvironmentOutlined />
        {data.province.name}
      </div>
      <div>
        Nặng: {data.animal.weight} kg, cao: {data.animal.height} cm
      </div>
    </Col>
  );
};

export default ItemMarket;

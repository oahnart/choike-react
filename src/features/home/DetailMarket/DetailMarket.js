import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BASE_URL } from "../../../utils/constants/constant";
import { actionGetDetailMarkets } from "./action";
import "./detail.scss";

const DetailMarket = (props) => {
  console.log("DetailMarket -> props", props);
  const imgChicken = props?.detailMarket?.animal?.images[0];

  const market_id = props.match.params.market_id;

  const data = props?.detailMarket;

  useEffect(() => {
    _getData(market_id);
  }, []);

  const _getData = (id) => {
    props.actionGetDetailMarkets(id);
  };
  return (
    <div className="container-detail">
      <div className="wp-img col">
        <img
          alt="ok"
          src={`${BASE_URL}api/v1/file/image/${imgChicken?.referenceName}`}
        />
      </div>
      <div className="wp-content col">
        <div>{data?.animal?.name}</div>
        <div>
          {data?.animal?.originalPrice?.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </div>
        <div>Khu vực</div>
        <div>
          {data?.ward?.name} , {data?.district?.name} , {data?.province?.name}
        </div>
        <div>Mô tả chi tiết</div>
        <div>{data?.animal?.description}</div>
        <div>Thông số chi tiết</div>
        <div>Chiều cao : {data?.animal?.height} cm</div>
        <div>Chiều dài cựa : {data?.animal?.heelHeight} cm</div>
        <div>Cân nặng : {data?.animal?.weight} kg</div>
        <div>Tuổi : {data?.animal?.age} tháng</div>
        <div>Người bán</div>
        <div>
          <img alt="ok" src={data?.owner?.imageUrl} />
          <div>{data?.owner?.name}</div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    detailMarket: state.detailMarketReducer.detailMarket,
    isFetching: state.detailMarketReducer.isFetching,
  }),
  { actionGetDetailMarkets }
)(DetailMarket);

import React from "react";

const ModelSkeleton = () => {
  return (
    <div className="model">
      <div className="skeleton model__img--skeleton"></div>
      <div className="model__details model__details-1">
        <div className="skeleton model__details--skeleton"></div>
        <div className="skeleton model__details--skeleton"></div>
      </div>
      <div className="model__details model__details-2">
        <div className="model__detail">
          <div className="skeleton model__details--skeleton"></div>
        </div>
        <div className="model__detail model__detail-right">
          <div className="skeleton model__details--skeleton"></div>
        </div>
        <div className="model__detail model__detail-left">
          <div className="skeleton model__details--skeleton"></div>
        </div>
        <div className="model__detail model__detail-right">
          <div className="skeleton model__details--skeleton"></div>
        </div>
      </div>
      <div className="skeleton model__btn--skeleton"></div>
    </div>
  );
};

export default ModelSkeleton;

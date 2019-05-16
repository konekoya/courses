import React from "react";

const ProductDetail = ({ data }) => {
  console.log({ data });

  return (
    <>
      <h2>{data.avatar_url}</h2>
      <img src={data.avatar_url} width="100" height="100" alt="Oh, that's me" />
    </>
  );
};

export default ProductDetail;

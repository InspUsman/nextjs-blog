import React from "react";

const DynamicData = ({ data }) => {
  if (data) return <div>{data.id}</div>;
};

export const getServerSideProps = async () => {
  const response = await fetch("https://random-data-api.com/api/v2/users");
  const responseData = await response.json();

  return {
    props: {
      data: responseData,
    },
  };
};

export default DynamicData;

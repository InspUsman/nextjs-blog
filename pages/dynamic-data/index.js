import React from "react";

const DynamicData = ({ data }) => {
  if (data) return <div>{data.id}</div>;
};

export const getStaticProps = async () => {
  const response = await fetch("https://random-data-api.com/api/v2/users");
  const responseData = await response.json();

  return {
    props: {
      data: responseData,
    },
    revalidate: 5,
  };
};

export default DynamicData;

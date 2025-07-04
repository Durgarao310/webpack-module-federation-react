import React from "react";
const Index = ({ type = "text", placeholder = "Type here..." }) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Index;

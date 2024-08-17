import React from "react";

const ModuleOptions = ({ item }: any) => {
  return <option value={item.title}>{item.title}</option>;
};
export default ModuleOptions;
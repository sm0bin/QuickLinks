import React from "react";
type TContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return <div>{children}</div>;
};

export default Container;

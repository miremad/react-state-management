import { ReactNode } from "react";
import "./style.css";

type ContainerPropsType = {
  children: ReactNode;
};
export const Container = ({ children }: ContainerPropsType) => {
  return <div className="container">{children}</div>;
};

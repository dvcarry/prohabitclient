import { FC } from "react";
import { Outlet } from "react-router-dom";
// import { Logo } from "../Logo/Logo";
import "./Layout.scss";

export const Layout: FC = () => {
  return (
    <div className="page">
      <div 
      // className="wrapper"
      >
        {/* <div>
        <Logo />
      </div> */}
        <Outlet />
      </div>
    </div>
  );
};

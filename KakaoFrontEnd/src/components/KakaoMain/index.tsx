import KakaoRoute from "../KakaoRoutes";
import KakaoBottomAppbar from "../KakaoBottomAppbar";
import { BrowserRouter } from "react-router-dom";
import React from "react";
const KakaoMain = () => {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <KakaoRoute />
          <KakaoBottomAppbar />
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
};

export default KakaoMain;

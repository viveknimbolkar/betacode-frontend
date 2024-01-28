import React from "react";
import Sidemenu from "../sidemenu/sidemenu";
import Header from "../header/header";

function RootLayout({ ScreenComponent }) {
  return (
    <div>
      <Sidemenu />
      <Header/>
      {ScreenComponent}
    </div>
  );
}

export default RootLayout;

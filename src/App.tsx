/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Routes as Router } from "./Routes";
import "./App.css";
import _ from "lodash";
import ConnectModal from "./Components/ConnectModal";
import useAuth from "./hooks/useAuth";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Menu from './Components/Menu';
import Footer from "./Components/Footer";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isShowBar, setShowBar] = useState(false);
  const { login } = useAuth();
  const renderMenu = () => {
    return <>
    <Topbar setOpen={setShowBar} isOpen={isShowBar} />
    <Menu open={isShowBar} onClose={() => { setShowBar(false) }} />
    </>
  }

  const renderRouter = () => {

    return <>
      <Sidebar />
      <Topbar setOpen={setShowBar} isOpen={isShowBar} />
      <div style={{minHeight: 'calc(100vh - 220px - 170px)'}}>
      <Routes>
        {_.map(Router.container, (each, index) => {
          const Component: any = each.Component;
          return <Route path={each.path} element={Component ? <Component open={open} setOpen={setOpen} /> : null} key={index} />;
        })}
      </Routes>
      </div>
      {/* {!(pathname==='/map'&& isMobile) && <Footer />} */}
      <Footer />
      <ConnectModal open={open} setOpen={setOpen} login={login} />
    </>
  }
  return (
    <BrowserRouter>
      {isShowBar ? renderMenu() : renderRouter()}
    </BrowserRouter>
  );
};

export default App;

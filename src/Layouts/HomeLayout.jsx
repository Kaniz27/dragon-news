import React from "react";
import { Outlet } from "react-router";
import Header from "./Components/Header";
import LatestNews from "./Components/LatestNews";
import Navbar from "../Navbar";
import Leftaside from "./Components/HomeLayout/Leftaside";
import RightAside from "./Components/HomeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <section className="w-11/12 mx-auto py-3">
        <LatestNews></LatestNews>
      </section>
      <nav className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto my-3  grid grid-cols-12">
        <aside className="col-span-3">
          <Leftaside></Leftaside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
         <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
       
      </main>
    </div>
  );
};

export default HomeLayout;

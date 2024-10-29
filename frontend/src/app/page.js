import React from "react";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Filter from "./components/Filter";
import Calender from "./components/Calender";
import Offer from "./components/Offer";

export default function Home() {
  return (
   <div className="space-y-10 md:space-y-20 bg-slate-100">
    <Slider/>
    <Categories/>
    <Calender/>
    <Offer/>
    <Filter/>
   </div>
  );
}

import React from "react";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Filter from "./components/Filter";
import Calender from "./components/Calender";
import Offer from "./components/Offer";
import Story from "./components/Story";
import Slide from "./components/Slide";
import Collection from "./components/Collection";
import Flowers from "./components/Flowers";
import Cakes from "./components/Cakes";
import Anniversary from "./components/Anniversary";
import Gifts from "./components/Gifts";

export default function Home() {
  return (
   <div className="space-y-10 md:space-y-16 bg-slate-100">
    <Slider/>
    <Categories/>
    <Calender/>
    <Slide/>
    <Offer/>
    <Filter/>
    {/* <Story/> */}
    <Collection/>
    <Flowers/>
    <Cakes/>
    <Anniversary/>
    <Gifts/>
    
   </div>
  );
}

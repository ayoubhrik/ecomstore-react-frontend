import React from "react";
import Featured from "../components/homepage/FeaturedProducts";
import Hero from "../components/Hero";
import cartBcg from "../images/banner1.jpg";
export default function HomePage() {
  return (
    <>
       <Hero img={cartBcg} />
      <Featured />
    </>
  );
}

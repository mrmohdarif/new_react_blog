import React, { createContext, useState } from "react";
import { Nav } from "../Nav";
import { Thelatest } from "./Thelatest";
import { Thelatestarticle } from "./Thelatestarticle";
import { Thelateststories } from "./Thelateststories";
import Footer from "../Footer";
export const store = createContext();
export function Home() {
  const [data, setdata] = useState([
    {
      id: "1",
      name: "move",
      path: "/javan",
      categorey: "The Latest",
      img: "https://www.filmibeat.com/ph-big/2023/02/jawan_167688637400.jpg",
      heading: "Jawan Move",
      text: "Jawan is a 2023 Bollywood action, thriller movie, directed by Atlee Kumars...",
    },
    {
      id: "2",
      path: "/papaya",
      categorey: "The Latest",
      img: "https://images.pexels.com/photos/4113798/pexels-photo-4113798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Papaya",
      text: "Papaya or Carica papaya is a tropical succulent fruit of the Caricaceae family. Papaya fruit is edible raw when ripe, and its young fruit, leaves.... ",
    },
    {
      id: "3",
      path: "/tiktok",
      categorey: "The Latest",
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/18412/production/_129764399_tiktok-index-getty.jpg.webp",
      heading: "TikTok",
      text: "Montana is set to become the first US state to ban Chinese-owned media giant TikTok from personal devices.....",
    },
    {
      id: "4",
      path: "/bank",
      categorey: "The Latest Article",
      img: "https://bl-i.thgim.com/public/incoming/ivmgyn/article66424989.ece/alternates/LANDSCAPE_1200/2023-01-23T102603Z_550141351_RC29WY90SDM5_RTRMADP_3_AXIS-BANK-RESULTS.JPG",
      heading: "Axis Bank ties up with ITC to offer loans to farmers",
      text: "Axis Bank ties up with ITC to offer loans to farmers",
    },
    {
      id: "5",
      path: "/indiannavey",
      categorey: "The Latest Article",
      img: "https://bl-i.thgim.com/public/incoming/ojmgrd/article66504166.ece/alternates/LANDSCAPE_1200/338Q8DP-highres.jpg",
      heading:
        "India deliberates on standard procedures to handle spy balloons",
      text: "Discussions between the forces at an early stage....",
    },
    {
      id: "6",
      path: "/lalu",
      categorey: "The Latest Article",
      img: "https://bl-i.thgim.com/public/incoming/gg1ewu/article66594388.ece/alternates/LANDSCAPE_1200/PTI03_07_2023_000019B.jpg",
      heading: "CBI questions Lalu in land-for-job scam",
      text: "Lalu, who underwent a kidney transplant in Singapore recently, was questioned by the agency for about six hours....",
    },
    {
      id: "7",
      categorey: "Latest Stories",
      img: "https://images.indianexpress.com/2023/05/rahul-gandhi-truck-ride.jpg?w=640",
      heading:
        "A people’s leader’: After delivery agent, bus commuters, Rahul Gandhi now rides with truck drivers",
      text: "Gandhi reportedly made the trip to interact with truck drivers and understand their problems.....",
    },
    {
      id: "7",
      categorey: "Latest Stories",
      img: "https://images.indianexpress.com/2023/05/Kohli-41.jpg?w=640",
      heading:
        "Disappointed but…’: Virat Kohli breaks silence on RCB’s exit from IPL 2023",
      text: "Virat Kohli wrote an emotional note after RCB s exit from season 16 of the Indian Premier League.....",
    },
    {
      id: "7",
      categorey: "Latest Stories",
      img: "https://images.indianexpress.com/2023/05/rupay-upi-payment.jpg?w=640",
      heading: "Google Pay now supports UPI payments using RuPay credit cards",
      text: "You can now make UPI payments using RuPay credit cards on Google Pay. Here s how to add it to your Google Pay account....",
    },
  ]);
  return (
    <>
      <Nav />
      <div className="home1_image">
        <div>
          <img
            src="https://media5.bollywoodhungama.in/wp-content/uploads/2020/08/Pathaan-01.jpg"
            alt="bolywoood"
            className="pathan"
          />

          {/* <iframe width="650" height="450" src="https://www.youtube.com/embed/4xl9KfUg8Lc?autoplay=1&mute=0&controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen  style={{borderRadius:"20px"}}></iframe> */}
        </div>

        <div className="home2_image">
          <img
            src="https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="hollywood"
            className="hollywood"
          />
          <img
            src="https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="fitness"
            className="fitness"
          />
          <img
            src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="tech"
            className="tech"
          />
        </div>
      </div>
      <store.Provider value={[data, setdata]}>
        <Thelatest />
        <Thelatestarticle />
        <Thelateststories />
        <Footer/>
      </store.Provider>
    </>
  );
}

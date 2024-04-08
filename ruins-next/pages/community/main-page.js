import PageSelect from "@/components/johnny/page-select";
import React from "react";
import CentralMain from "./central-main";
import Topics from "@/components/johnny/home-topics";
import FollowsBar from "@/components/johnny/follows-notify-bar";
import Navbar from "@/components/linda/navbar/navbar";
import Footer from "@/components/linda/footer/footer";

export default function MainPage() {
  return (
    <div className="bg-black h-screen">
      <Navbar className="bg-black" />
      <PageSelect />
      <Topics />
      <FollowsBar />
      <CentralMain />
      {/* <Footer /> */}
    </div>
  );
}
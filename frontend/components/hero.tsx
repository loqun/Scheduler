import React, {useState, useEffect} from "react";
import AnimationData from '../../public/assets/calendar.json';
import Lottie from "lottie-react";
import { Button } from "frontend/components/ui/button"

export default function hero() {


  //animation
  const style = {
    height:400,
  }

  return (
    <div className="columns-2 my-20 flex justify-evenly items-center">
      <div className="font-['Oswald'] text-7xl ">
        Welcome to <span className="font-bold">r/p</span>  <br />
        <span className="text-4xl ml-10">Best scheduler exist</span>
        <div className="flex justify-center mt-10">
        <Button className="hover:bg-white hover:text-blue-950">Lets get started</Button>
        </div>  
      </div>
      <Lottie animationData={AnimationData} style={style}></Lottie>
    </div>

  );
}

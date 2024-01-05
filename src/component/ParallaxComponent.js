import React, { useRef } from "react";
import "../App.css";
import { Parallax } from "react-parallax";
import boy from "../assets/boy.jpg";
import home from "../assets/home.jpg";
import mountain from "../assets/mountain.jpg";
import night from "../assets/night.jpg";
import forest from "../assets/forest.jpg";
import landscape from "../assets/landscape.jpg";
import view from "../assets/view.jpg";
import pathway from "../assets/pathway.jpg";

const ParallaxComponent = () => {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();
  const section7 = useRef();
  const section8 = useRef();

  const scrollHandler = (elmRef) => {
    console.log(elmRef.current.offsetTop);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      {/*-------- dots ---------*/}
      <div className="dot">
        <li
          className="options "
          onClick={() => {
            scrollHandler(section1);
          }}
        ></li>
        <li
          className="options"
          onClick={() => {
            scrollHandler(section2);
          }}
        ></li>
        <li
          className="options"
          onClick={() => {
            scrollHandler(section3);
          }}
        ></li>
        <li
          className="options"
          onClick={() => {
            scrollHandler(section4);
          }}
        ></li>
        <li
          className="options"
          onClick={() => {
            scrollHandler(section5);
          }}
        ></li>
        <li
          className="options"
          onClick={() => {
            scrollHandler(section6);
          }}
        ></li>
        <li
          className="options"
          onClick={() => {
            scrollHandler(section7);
          }}
        ></li>
        <li
          className="options"
          onClick={() => {
            scrollHandler(section8);
          }}
        ></li>
      </div>
      {/*-------- dots end---------*/}
      <div>
        <div ref={section1}>
          <Parallax strength={400} bgImage={forest}>
            <div className="content"></div>
          </Parallax>
        </div>
        <div ref={section2}>
          <Parallax strength={400} bgImage={landscape}>
            <div className="content"></div>
          </Parallax>
        </div>
        <div ref={section3}>
          <Parallax strength={400} bgImage={view}>
            <div className="content"></div>
          </Parallax>
        </div>
        <div ref={section4}>
          <Parallax strength={300} bgImage={pathway}>
            <div className="content"></div>
          </Parallax>
        </div>
        <div ref={section5}>
          <Parallax strength={400} bgImage={home}>
            <div className="content"></div>
          </Parallax>
        </div>
        <div ref={section6}>
          <Parallax strength={400} bgImage={boy}>
            <div className="content"></div>
          </Parallax>
        </div>
        <div ref={section7}>
          <Parallax strength={300} bgImage={mountain}>
            <div className="content"></div>
          </Parallax>
        </div>
        <div ref={section8}>
          <Parallax strength={400} bgImage={night}>
            <div className="content"></div>
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default ParallaxComponent;

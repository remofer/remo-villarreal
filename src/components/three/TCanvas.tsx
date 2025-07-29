import React, { Suspense, useEffect, useState, VFC } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  enFragmentShader,
  enVertexShader,
  jpFragmentShader,
  jpVertexShader,
} from "../../modules/glsl/shader";
import { Background } from "./Background";
import { Lense } from "./Lense";
import { TextPlane } from "./TextPlane";
import Header from "../ui/Header";
import { css } from "@emotion/css";

export const TCanvas: VFC = () => {
  const OrthographicCamera = new THREE.OrthographicCamera(
    -1,
    1,
    1,
    -1,
    -10,
    10
  );

  const scrollToAbout = () => {
    const section = document.getElementById("about-me");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className={styles.mobileHero}>
          <Header />
          <div className={styles.mobileContent}>
            <h1>Hey, I build stunning Shopify stores</h1>
            <h2>& frontend experiences</h2>
            <h3>pixel by pixel</h3>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <div className={styles.canvasWrapper}>
            <Canvas
              camera={OrthographicCamera}
              dpr={window.devicePixelRatio}
              style={{ width: "100vw", height: "100vh" }}
            >
              <Suspense fallback={null}>
                <Background />
                <Lense />
                <TextPlane
                  text={[
                    "Hey, I build stunning Shopify stores",
                    "& frontend experiences",
                    "pixel by pixel",
                  ]}
                  vertexShader={enVertexShader}
                  fragmentShader={enFragmentShader}
                />
                <TextPlane
                  text={[
                    "Hola, creo tiendas Shopify impresionantes",
                    "y experiencias frontend",
                    "pixel a pixel.",
                  ]}
                  vertexShader={jpVertexShader}
                  fragmentShader={jpFragmentShader}
                />
              </Suspense>
            </Canvas>

            <div className={styles.arrow} onClick={scrollToAbout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="30"
                viewBox="0 0 28 15"
                fill="none"
              >
                <path
                  d="M27.3826 1.05078L14.2643 14.1734L1.15039 1.05078"
                  stroke="#ffff"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const styles = {
  canvasWrapper: css`
    position: relative;
    width: 100%;
    height: 100vh;
  `,
  mobileHero: css`
    background-color: black;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
  `,
  mobileContent: css`
    h1,
    h2,
    h3 {
      font-family: "Poppins", sans-serif;
      margin: 0.5rem 0;
    }

    h1 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  `,
  arrow: css`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    animation: bounce 1.5s infinite;

    svg {
      display: block;
      width: 56px;
      height: 30px;
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translate(-50%, 0);
      }
      50% {
        transform: translate(-50%, 10px);
      }
    }
  `,
};

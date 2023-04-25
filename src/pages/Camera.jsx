import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Wrap from "../components/Wrap";
import { PictureContext } from "../context/PicutreContext";
// {/* section 컴포넌트 */}
// {/* picture context로 전역적으로 다루자 */}

export default function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  // const [picture, setPicture] = useState([]);
  // const [count, setCount] = useState(10);
  const { picture, addPicture } = useContext(PictureContext);

  useEffect(() => {
    async function getMedia() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (error) {
        console.log("카메라 허용을 실패했습니다", error);
      }
    }
    getMedia();
  });

  const handleShooting = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas
        .getContext("2d")
        .drawImage(video, 0, 0, canvas.width, canvas.height);
      const data = canvas.toDataURL();
      addPicture(data);
    }
  };

  const handleLinkClick = () => {
    navigate(`/picture/end`);
  };
  return (
    <Wrap>
      <section>
        <div>
          {/* <span>{count}</span> */}
          <br />
          <span>{picture.length}</span>
        </div>
        <article>
          <video ref={videoRef} width="300" height="300" />
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </article>
        <button
          type="button"
          onClick={handleShooting}
          disabled={picture.length === 6 ? true : false}
        >
          촬영
        </button>
        <button
          type="button"
          disabled={picture.length === 6 ? false : true}
          onClick={handleLinkClick}
        >
          다음
        </button>
      </section>
    </Wrap>
  );
}

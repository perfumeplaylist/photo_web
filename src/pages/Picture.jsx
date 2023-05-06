import React, { useContext, useState, useRef } from "react";
import Wrap from "../components/Wrap";
import { useNavigate } from "react-router-dom";
import { PictureContext } from "../context/PicutreContext";
// import styles from "./Picture.module.css";

export default function Picture() {
  const { frame, changeFrame } = useContext(PictureContext);
  const [abled, setAbled] = useState(true);
  const navigate = useNavigate();

  const handlePictureClick = (e) => {
    const {
      target: { dataset: name, style },
    } = e;
    changeFrame({
      frame: name.frame,
      blank: name.blank,
      vertical: name.vertical,
      width: style.width,
      height: style.height,
    });
    setAbled(false);
  };

  const handleBtnClick = () => {
    navigate("/picture/start");
  };
  console.log(frame);
  return (
    <Wrap>
      <section>
        {frame.frame ? (
          <img
            src={frame.frame}
            style={{ widht: frame.widht, height: frame.height }}
          />
        ) : (
          <></>
        )}
      </section>
      <section>
        <article>
          <h3>프레임 선택</h3>
          <ul>
            <li>
              <button onClick={handlePictureClick}>
                <img
                  src="인생네컷.jpg"
                  style={{ width: 200, height: 600 }}
                  alt="인생네컷_프레임"
                  data-frame="인생네컷.jpg"
                  data-blank="4"
                  data-vertical="true"
                />
              </button>
            </li>
            <li>
              <button onClick={handlePictureClick}>
                <img
                  src="인생네컷-프레임2.jpg"
                  style={{ width: 400, height: 400 }}
                  alt="인생네컷_프레임"
                  data-frame="인생네컷-프레임2.jpg"
                  data-blank="4"
                  data-vertical="false"
                />
              </button>
            </li>
          </ul>
        </article>
        <button type="button" onClick={handleBtnClick} disabled={abled}>
          다음단계
        </button>
      </section>
    </Wrap>
  );
}

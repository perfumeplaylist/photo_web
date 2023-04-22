import React, { useState } from "react";
import Wrap from "../components/Wrap";
import { useNavigate } from "react-router-dom";
// import styles from "./Picture.module.css";
export default function Picture() {
  const [picture, setPicture] = useState({
    url: "",
    thema: "",
    frame: "",
    blank: "",
    description: "",
  });

  const [abled, setAbled] = useState(true);
  const navigate = useNavigate();

  const handlePictureClick = (e) => {
    setPicture((prev) => ({
      ...prev,
      frame: e.target.dataset.frame,
      blank: e.target.dataset.blank,
    }));
    setAbled(false);
  };

  const handleBtnClick = (e) => {
    navigate("/picture/start");
  };

  return (
    <Wrap>
      <section>
        {picture.frame ? (
          <img src={picture.frame} style={{ width: 300, height: 300 }} />
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
                  style={{ width: 300, height: 300 }}
                  alt="인생네컷_프레임"
                  data-frame="인생네컷.jpg"
                  data-blank="4"
                />
              </button>
            </li>
            <li>
              <button onClick={handlePictureClick}>
                <img
                  src="인생네컷-프레임2.jpg"
                  style={{ width: 300, height: 300 }}
                  alt="인생네컷_프레임"
                  data-frame="인생네컷-프레임2.jpg"
                  data-blank="4"
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

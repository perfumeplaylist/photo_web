import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Wrap from "../components/Wrap";
import { PictureContext } from "../context/PicutreContext";
import styles from "./Choose.module.css";

export default function Choose() {
  const [selectPicture, setSelectPicture] = useState([]);
  const [selectColor, setSelectColor] = useState(initalColor);
  const navigate = useNavigate();
  const { picture, frame, frameDispatch } = useContext(PictureContext);

  const handlePicutreClick = (e) => {
    const { currentSrc } = e.target;
    if (selectPicture.length <= 4) {
      setSelectPicture((prev) => [...prev, currentSrc]);
    } else {
      return;
    }
  };

  const handleColorBtnClick = (e) => {
    frameDispatch({ type: "thema", value: e.target.style.backgroundColor });
  };

  const handleBtnClick = () => {
    navigate(``);
  };
  console.log(picture);
  return (
    <Wrap>
      {/* grid 적용 */}
      {/* thema도 설정 */}
      <section className={styles.container}>
        <ul className={styles.picture_list}>
          {picture.map((el, idx) => {
            return (
              <li key={idx}>
                <button type="button" onClick={handlePicutreClick}>
                  <img
                    src={el}
                    alt="찍은 사진들"
                    style={{
                      width: `calc(${frame.width} / 4)`,
                      height: `calc(${frame.height} / 4)`,
                    }}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        {frame.frame ? (
          <div
            style={{ position: "relative", backgroundColor: `${frame.thema}` }}
          >
            <img
              src={`/${frame.frame}`}
              style={{
                width: frame.width,
                height: frame.height,
              }}
              alt="인생네컷 프레임"
            />
            {selectPicture &&
              selectPicture.map((el, id) => {
                return (
                  <img
                    src={el}
                    alt="선택한 사진"
                    style={{
                      width: `calc(${frame.width} / 4)`,
                      height: `calc(${frame.height} / 4)`,
                      position: "absolute",
                      top: `calc(${id}*(${frame.height} / 4))`,
                      left: `0`,
                    }}
                  />
                );
              })}
          </div>
        ) : (
          <></>
        )}
      </section>
      <section>
        {/* 이거 컴포넌트로 만들어서 className별로 style다르게 적용 */}
        <ul className={styles.picture_list}>
          {selectColor.map((el, idx) => {
            return (
              <li key={idx}>
                <button onClick={handleColorBtnClick}>
                  <div
                    style={{
                      backgroundColor: `${el.value}`,
                      width: 150,
                      height: 150,
                    }}
                  ></div>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <button
        type="submit"
        disabled={selectPicture.length === 4 ? false : true}
        onClick={handleBtnClick}
      >
        저장하기
      </button>
    </Wrap>
  );
}

const initalColor = [
  {
    color: "black",
    value: "#000000",
  },
  {
    color: "silver",
    value: "#c0c0c0",
  },
  { color: "bisque", value: "#ffe4c4" },
  { color: "darkkhaki", value: "#bdb76b" },
];

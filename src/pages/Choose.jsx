import React, { useContext, useState } from "react";
import Wrap from "../components/Wrap";
import { PictureContext } from "../context/PicutreContext";
import styles from "./Choose.module.css";

export default function Choose() {
  const [selectPicture, setSelectPicture] = useState([]);
  const { picture, frame, chageFrame } = useContext(PictureContext);

  const handlePicutreClick = (e) => {
    const { currentSrc } = e.target;
    if (selectPicture.length <= 4) {
      setSelectPicture((prev) => [...prev, currentSrc]);
    } else {
    }
  };
  return (
    <Wrap>
      {/* grid 적용 */}
      <section className={styles.container}>
        <ul>
          {picture.map((el, idx) => {
            return (
              <li key={idx}>
                <button type="button" onClick={handlePicutreClick}>
                  <img
                    src={el}
                    alt="찍은 사진들"
                    style={{ width: 100, height: 100 }}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        {frame.frame ? (
          <img
            src={`/${frame.frame}`}
            style={{
              width: 300,
              height: 300,
              backgroundImage: `url(${selectPicture[0]})`,
              backgroundPosition: "top",
            }}
            alt="인생네컷 프레임"
          />
        ) : (
          <></>
        )}
      </section>
    </Wrap>
  );
}

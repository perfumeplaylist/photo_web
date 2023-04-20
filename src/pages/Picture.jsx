import React, { useState } from "react";
import Wrap from "../components/Wrap";

export default function Picture() {
  const [picture, setPicture] = useState({});
  const handlePictureClick = () => {};
  return (
    <Wrap>
      <section>{/* <img>{picture}</img> */}</section>
      <section>
        <article>
          <h3>프레임 선택</h3>
          <ul>
            <li>
              <button onClick={handlePictureClick}>
                <img src="인생네컷.jpg" style={{ width: 300, height: 300 }} />
              </button>
            </li>
            <li>
              <button onClick={handlePictureClick}>
                <img
                  src="인생네컷-프레임2.jpg"
                  style={{ width: 300, height: 300 }}
                />
              </button>
            </li>
          </ul>
        </article>
        <article>
          <h3>테마 설정</h3>
          <ul>
            <li>{/* <button></button> */}</li>
          </ul>
        </article>
      </section>
    </Wrap>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import Wrap from "../components/Wrap";
export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/picture`);
  };
  return (
    <Wrap>
      <section>제목</section>
      <section>
        <button type="button" onClick={handleClick}>
          시작하기
        </button>
      </section>
    </Wrap>
  );
}

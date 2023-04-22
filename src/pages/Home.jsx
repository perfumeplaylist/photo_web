import React from "react";
import { useNavigate } from "react-router-dom";
import Wrap from "../components/Wrap";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/picture`);
  };
  const handlePlayClick = () => {
    // 클릭시 배경은 투명하게 하고
    // 또 다른 본문 내용을 보여주도록 설정(style로 다루면 될것 같음)
  };
  return (
    <Wrap>
      <section>
        {/* background로 이미지 할당 */}
        <h2>
          {/* 자바스크립트 텍스트 애니메이션 라이브러리 사용 */}
          인생네컷 감동을 <br />
          웹에서도 느낄수 있도록
        </h2>
      </section>
      <section>
        <button type="button" onClick={handleClick}>
          시작하기
        </button>
        <button type="button" onClick={handlePlayClick}>
          사용법
        </button>
      </section>
      {/* 사용 설명서 태그 작성(그림위주로) */}
    </Wrap>
  );
}

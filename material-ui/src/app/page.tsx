import CustomButton from "@/components/CustomButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <article>
      <section>
        <h1>Material UI 시작하기</h1>
        <ul>
          <li>React 개발에서 쉽게 사용할 수 있는 UI Framework 입니다.</li>
          <li>디자인에 어려움을 겪지 않을 수 있어요.</li>
          <li><a href="https://mui.com/material-ui/">Material UI 홈페이지</a></li>
          <li>
            설치
            <ul>
              <li>npm install @mui/material @emotion/react @emotion/styled</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h1>Meterial Stack, Button 써보기</h1>
        <CustomButton />
        <ul>
          <li>
            Stack: 자식 요소를 일정한 간격(spacing)으로 나열해주는 레이아웃 컴포넌트
            <ul>
              <li>spacing의 기본 단위는 8px, 즉 spacing={2}는 16px 간격인 것</li>
              <li>direction="row" 정렬</li>
              <li>Button 세 개가 Stack 안에 포함되어 있어요..</li>
            </ul>
          </li>
          <li>
            Button
            <ul>
              <li>text: 투명 배경, 클릭 시 약간 강조됨 (기본형)</li>
              <li>containted: 채워진 버튼 (강조된 액션)</li>
              <li>outlined: 테두리만 있는 버튼 (보조 액션)</li>
            </ul>
          </li>
        </ul>
      </section>
    </article>
  );
}

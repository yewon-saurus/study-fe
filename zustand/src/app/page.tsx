'use client'

import Counter from "@/components/Counter";

export default function Home() {
  return (
    <article>
      <section>
        <h1>Zustand를 사용해봅시다.</h1>
        <ul>
          <li>zunstand를 설치해요.</li>
          <li>
            use*Store.ts를 작성해요.
            <ul>
              <li>일반적으로 <strong>use*Store</strong> 형식의 네이밍컨벤션을 따르나봐요.</li>
              <li>create 함수를 이용해서 '상태'와 그 상태를 변경하는 '액션 함수'를 정의해요.</li>
            </ul>
          </li>
          <li>
            필요한 곳에서 use*Store를 import하여 사용해요.
            <ul>
              <li>(Tip) 구조 분해 할당을 적극적으로 활용합시다.</li>
            </ul>
          </li>
        </ul>
      </section>
      
      <section>
        <h1>실습했어요.</h1>
        <Counter />
      </section>
      
      <section>
        <h1>Zustand는 좋아요.</h1>
        <ul>
          <li>Redux처럼 코드가 지저분하거나, 복잡하지 않아요.</li>
          <li>Context API처럼 불필요한 리렌더링을 일으키지 않도록 제어하기 쉬워요.</li>
          <li>게다가 용량도 작으며, 디버깅을 위한 devtools까지 존재해요.</li>
        </ul>
      </section>
    </article>
  );
}

# Material UI 시작하기

- React 개발에서 쉽게 사용할 수 있는 UI Framework 입니다.
- 디자인에 어려움을 겪지 않을 수 있어요.
- https://mui.com/material-ui/
- 설치
  - `npm install @mui/material @emotion/react @emotion/styled`

# Meterial Stack, Button 써보기
- `Stack`: 자식 요소를 일정한 간격(spacing)으로 나열해주는 레이아웃 컴포넌트
  - `spacing`의 기본 단위는 `8px`, 즉 `spacing={2}`는 `16px` 간격인 것
  - direction="row" 정렬
  - Button 세 개가 Stack 안에 포함되어 있어요..
- `Button`
  - `text`: 투명 배경, 클릭 시 약간 강조됨 (기본형)
  - `containted`: 채워진 버튼 (강조된 액션)
  - `outlined`: 테두리만 있는 버튼 (보조 액션)

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

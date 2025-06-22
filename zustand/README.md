# Zustand를 사용해봅시다.

- zustand를 설치해요.
- `use*Store.ts`를 작성해요.
  - 일반적으로 `use*Store` 형식의 네이밍컨벤션을 따르나봐요.
  - `create` 함수를 이용해서 '상태'와 그 상태를 변경하는 '액션 함수'를 정의해요.
- 필요한 곳에서 `use*Store`를 import하여 사용해요.
  - (Tip) 구조 분해 할당을 이해하고 적극적으로 활용합시다.

# Zustand는 좋아요.

- Redux처럼 코드가 지저분하거나, 복잡하지 않아요.
- Context API같은 불필요한 리렌더링을 일으키지 않도록 제어하기 쉬워요.
- 게다가! 용량도 작으며, 디버깅을 위한 devtools까지 존재해요.

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

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details
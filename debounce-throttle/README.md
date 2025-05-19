# Debounce & Throttle

## debounce.html

- 검색창 예제
- input에 타이핑할 때마다 `debounce`가 실행되지만,
- 입력 후 1000ms 동안 더이상 입력이 없을 때 `console.log`가 호출됩니다.
- API 호출 횟수를 줄이고, 성능을 높일 때 효과적입니다.
- 이벤트 발생 후 `setTimout`을 이용해 시간을 측정하고, 시간이 지난 뒤에 기능을 실행하고 있습니다.
- 시간이 지나기 전에 다시 이벤트가 발생한 경우, 시간 측정을 다시 시작합니다.

## throttle.html

- 스크롤 이벤트 예제
- 사용자가 스크롤을 여러 번 해도, 1000ms에 한 번만 로그가 출력됩니다.
- 렌더링 부담을 줄이고 성능을 높이는 데 유용합니다.
- `Date` 객체의 `getTime()`을 이용해 주기를 계산하고 있습니다.
- 마지막으로 기능이 실행된 시점으로부터 일정 시간이 지났다면, 다시 기능이 한 번 실행될 수 있습니다. (주기마다 실행 보장)

### func.apply(thisArg, argsArray)

함수 호출 방식 중 하나..

- `func`: 실행할 함수
- `thisArg`: 실행할 때 사용할 `this` 값
- `argsArray`: 함수에 전달할 인자들을 배열 형태로 전달

```js
function sayHello(name) {
  console.log(`안녕하세요, ${name}`);
}

sayHello.apply(null, ['철수']); // 출력: 안녕하세요, 철수
```

- 이건 `sayHello('철수')`와 동일하게 작동합니다.
- `func(...args)`처럼 실행하되, `this` 컨텍스트도 유지하고 싶을 때 `apply`를 사용합니다.
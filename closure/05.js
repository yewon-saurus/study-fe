function Counter() {
    let counter = 0;

    this.increase = function () {
        return ++counter;
    };

    this.decrease = function () {
        return --counter;
    };
}

const counter = new Counter();

console.log(counter.increase()); // 1
console.log(counter.decrease()); // 0

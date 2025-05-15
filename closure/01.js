function outerFunc() {
    let x = 10;
    let innerFunc = function () {
        console.log(x);
    }
    innerFunc();
}

outerFunc(); // 10

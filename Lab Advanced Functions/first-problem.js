function solve(area, vol, input) {
    const arr = JSON.parse(input);
    let result = [];
    for (const element of arr) {
        const volFunc = vol.bind(element);
        const areaFunc =  area.bind(element);
        result.push({area: areaFunc(), volume: volFunc()});
    }
    return result;
}
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
function area() {
    return Math.abs(this.x * this.y);
};
console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ));



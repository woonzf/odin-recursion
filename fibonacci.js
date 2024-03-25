// Assignment 1

function fibs(n) {
    if (n < 0) return "Invalid number";
    let arr = [];
    for (let i = 0; i < n; i++) {
        if (i < 2) arr.push(i);
        else arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

function fibsRecur(n) {
    if (n < 0) return "Invalid number";
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const arr = fibsRecur(n - 1);
    return [...arr, arr[n - 2] + arr[n - 3]];
}

console.log(fibs(8))
console.log(fibsRecur(8))
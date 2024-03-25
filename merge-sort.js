// Assignment 2

function mergeSort(arr) {
    if (arr.length === 0) return "Invalid array";
    if (arr.length === 1) return arr;
    const mid = parseInt(arr.length / 2);
    const arrL = arr.slice(0, mid);
    const arrR = arr.slice(mid, arr.length);
    return merge(mergeSort(arrL), mergeSort(arrR));
}

function merge(arrL, arrR) {
    let iL = 0;
    let iR = 0;
    const lenL = arrL.length;
    const lenR = arrR.length;
    let arrM = [];

    while (iL < lenL && iR < lenR) {
        if (arrL[iL] < arrR[iR]) {
            arrM.push(arrL[iL]);
            iL++;
        } else {
            arrM.push(arrR[iR]);
            iR++;
        }
    }

    while (iL < lenL) {
        arrM.push(arrL[iL]);
        iL++;
    }

    while (iR < lenR) {
        arrM.push(arrR[iR]);
        iR++;
    }
    
    return arrM;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))
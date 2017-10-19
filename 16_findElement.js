function findElement(arr, func) {

    var arrFilter = arguments[0].filter(arguments[1]);

    console.log(arrFilter[0]);

    return arrFilter[0];
}

findElement(
    [1, 2, 3, 4],
    function(num) {
        return num % 2 === 0;
    });
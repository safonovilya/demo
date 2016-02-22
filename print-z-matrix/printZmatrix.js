function printMatrix(num) {
    var counter = 1;

    for (var i = 1; i <= num; i++) {
        printRow(num, i);
    }

    function printRow(num, indexRow) {
        var str = '';
        for (var i = 1; i <= num; i++) {
            if (indexRow == 1 || indexRow == num) {
                str += (counter++ % 10);
                str += ' ';
            } else {
                if (i-1 == num - indexRow) {
                    str += (counter++ % 10);
                } else {
                    str += ' ';
                }
                str += ' ';
            }
        }
        console.log(str);
    }
}


printMatrix(4);
console.log('--');
printMatrix(5);
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let rec = [];
    if (matrix == undefined) {
        return rec;
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            for (let k = 0; k < matrix[i].length; k++) {
                rec.push(matrix[i][k]);
            }
        } else {
            for (let j = matrix[i].length; j > 0; j--) {
                rec.push(matrix[i][j - 1]);
            }
        }
    }
    matrix = rec;
    return matrix;
};

/* eslint-disable no-unused-vars */
function block_is_valid(board, block) {
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    board[block].forEach(b => {
        if (b !== 0) {
            count[b] += 1
        }
    })

    let isValid = true
    count[0] = null
    count.forEach(e => {
        if (e === 0 || e > 1) {
            isValid = false
        }
    })

    return isValid
}
function col_is_valid(board, col) {
    let block = Math.floor(col / 3)

    let line = 0

    if (block === 1) {
        line = col - 3
    } else if (block === 2) {
        line = col - 6
    } else {
        line = col
    }

    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let cell = 0

    for (let i = block; i <= block + 6; i += 3) {
        for (let j = line; j <= line + 6; j += 3) {
            cell = board[i][j]
            if (cell !== 0) {
                count[cell] += 1
            }
        }
    }

    let valid = true
    count[0] = null
    count.forEach(e => {
        if (e === 0 || e > 1) {
            valid = false
            return
        }
    })

    return valid
}

function row_is_valid(board, row) {
    let block = 3 * Math.floor(row / 3)
    let line = 0

    switch (row) {
        case 0:
        case 3:
        case 6:
            line = 0
            break
        case 1:
        case 4:
        case 7:
            line = 3
            break
        case 2:
        case 5:
        case 8:
            line = 6
            break
        default:
            break
    }

    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let cell = 0

    for (let i = block; i < block + 3; i++) {
        for (let j = line; j < line + 3; j++) {
            cell = board[i][j]
            if (cell !== 0) {
                count[cell] += 1
            }
        }
    }

    let valid = true
    count[0] = null
    count.forEach(e => {
        console.log(e)
        if (e === 0 || e > 1) {
            valid = false
            return
        }
    })

    return valid
}

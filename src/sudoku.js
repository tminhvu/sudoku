// fix this
export function oneDimenToStr(array) {
    let board = ''
    for (let i = 0; i < 81; i += 9) {
        for (let j = i; j < i + 9; j++) {
            if (array[j] != null)
                board+=(array[j]+1)
            else
                board+='.'
        }
    }
    return stringToBoard(board)
}
export function stringToBoard(str) {
    let board = new Array(9)
    for (let i = 0; i < 9; i++) {
        board[i] = []
    }

    let index = 0

    for (let l = 0; l < 81; l += 27) {
        for (let k = l; k < l + 9; k += 3) {
            for (let i = k; i < k + 21; i += 9) {
                for (let j = i; j < i + 3; j++) {
                    board[index].push(str.charAt(j))
                }
            }
            index++
        }
    }
    return board
}

export function blockIsValid(board, block) {
    const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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

export function colIsValid(board, col) {
    const block = Math.floor(col / 3)

    let line = 0

    if (block === 1) {
        line = col - 3
    } else if (block === 2) {
        line = col - 6
    } else {
        line = col
    }

    const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
        }
    })

    return valid
}

export function rowIsValid(board, row) {
    const block = 3 * Math.floor(row / 3)
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

    const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
        if (e === 0 || e > 1) {
            valid = false
        }
    })

    return valid
}

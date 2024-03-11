const board = ['_', '_', '_', '_', '_', '_', '_', '_', '_']

const printBoard = () => {
    alert(board[0] + "|" + board[1] + "|" + board[2] + "\n" + board[3] + "|" + board[4] + "|" + board[5] + "\n" + board[6] + "|" + board[7] + "|" + board[8]);
}

const evaluateWin = () => {
    if (board[0] === board[1] && board[0] === board[2] && board[0] !== '_') {           // 3 EN RAYA HORIZONTAL
        console.log('11111111111')
        return true
    } else if (board[3] === board[4] && board[3] === board[5] && board[3] !== '_') {    // 3 EN RAYA HORIZONTAL
        console.log('2222222', board[3], board[4], board[5])
        return true
    } else if (board[6] === board[7] && board[6] === board[8] && board[6] !== '_') {    // 3 EN RAYA HORIZONTAL
        console.log('333333333')
        return true
    } else if (board[0] === board[3] && board[0] === board[6] && board[0] !== '_') {    // 3 EN RAYA VERTICAL
        console.log('44444444444')
        return true
    } else if (board[1] === board[4] && board[1] === board[7] && board[1] !== '_') {    // 3 EN RAYA VERTICAL
        console.log('5555555555555')
        return true
    } else if (board[2] === board[5] && board[2] === board[8] && board[2] !== '_') {    // 3 EN RAYA VERTICAL
        console.log('66666666666666')
        return true
    } else if (board[0] === board[4] && board[0] === board[8] && board[0] !== '_') {    // 3 EN RAYA DIAGONAL
        console.log('77777777777777')
        return true
    } else if (board[2] === board[4] && board[2] === board[6] && board[2] !== '_') {    // 3 EN RAYA DIAGONAL
        console.log('88888888888888')
        return true
    } else {
        return false
    }
}
printBoard()
let isPlayer1 = true
let haGanadoAlguien = false

while (!haGanadoAlguien) {
    const player = isPlayer1 ? 'X' : 'O';
    const n = prompt('Introduce un número del 0 al 8, player ' + player + ':');
    board[n] = player;

    if (evaluateWin()) {
        alert('Enhorabuena player' + player);
        haGanadoAlguien = true;
    } else {
        isPlayer1 = !isPlayer1;
        printBoard();
    }
}
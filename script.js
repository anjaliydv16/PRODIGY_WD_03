let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

document.querySelectorAll('.cell').forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameBoard[index] === '') {
            gameBoard[index] = currentPlayer;
            cell.textContent = currentPlayer;
            checkForWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

document.getElementById('reset-button').addEventListener('click', () => {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
});

function checkForWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`Player ${gameBoard[a]} wins!`);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        alert('It\'s a draw!');
    }
}
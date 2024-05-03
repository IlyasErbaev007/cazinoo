// Обработка нажатия кнопок "Купить"
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const price = parseInt(button.getAttribute('data-price'));
        const freeSpins = parseInt(button.getAttribute('data-free-spins'));

        if (price === 0 && freeSpins > 0) {
            // Если товар бесплатный и это бесплатные прокрутки
            // Добавляем 10 бесплатных прокруток
            addFreeSpins(freeSpins);
            alert(`Вы получили ${freeSpins} бесплатных прокруток!`);
        } else {
            // Если это обычный товар, обработка покупки
            // Добавить здесь логику для других товаров, если необходимо
        }
    });
});

// Функция для добавления бесплатных прокруток
function addFreeSpins(amount) {
    // Добавить здесь логику для добавления прокруток куда-то, например, к текущему балансу
    // Например:
    // currentSpins += amount;
    // Или вызов функции из вашего основного кода, которая добавит прокрутки
}

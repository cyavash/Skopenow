document.addEventListener('DOMContentLoaded', function() {
    // Set the target date to 5th October 9:00 AM in EDT timezone
    const targetDate = new Date('October 5, 2023 09:00:00 GMT-0400');

    function updateTimer() {
        const now = new Date();
        let timeDiff = targetDate - now;

        if (timeDiff <= 0) {
            // Stop the timer if the countdown is over
            clearInterval(timerInterval);
            document.querySelector('.days').textContent = '00';
            document.querySelector('.hours').textContent = '00';
            document.querySelector('.minutes').textContent = '00';
            document.querySelector('.seconds').textContent = '00';
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        timeDiff %= (1000 * 60 * 60 * 24);

        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        timeDiff %= (1000 * 60 * 60);

        const minutes = Math.floor(timeDiff / (1000 * 60));
        timeDiff %= (1000 * 60);

        const seconds = Math.floor(timeDiff / 1000);

        document.querySelector('.days').textContent = String(days).padStart(2, '0');
        document.querySelector('.hours').textContent = String(hours).padStart(2, '0');
        document.querySelector('.minutes').textContent = String(minutes).padStart(2, '0');
        document.querySelector('.seconds').textContent = String(seconds).padStart(2, '0');
    }

    // Update timer initially
    updateTimer();

    // Update timer every second
    const timerInterval = setInterval(updateTimer, 1000);
});

function takeShot(event) {
    const result = document.getElementById('result');
    const field = document.getElementById('field');
    const ball = document.getElementById('ball');
    const goalkeeper = document.getElementById('goalkeeper');

    // Get click position relative to the field
    const rect = field.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Move the ball to the click position
    ball.style.left = `${x}px`;
    ball.style.bottom = `${200 - y}px`;

    // Calculate goalkeeper's reach (adjustable range)
    const goalkeeperRange = 40; // Range goalkeeper can move to either side from the center
    const goalkeeperCenter = 140; // Initial center position of the goalkeeper
    const goalkeeperPosition = x < goalkeeperCenter - goalkeeperRange ? goalkeeperCenter - goalkeeperRange :
                               x > goalkeeperCenter + goalkeeperRange ? goalkeeperCenter + goalkeeperRange : x;

    // Move the goalkeeper to intercept
    goalkeeper.style.left = `${goalkeeperPosition - 20}px`; // Adjust for goalkeeper width

    setTimeout(() => {
        if (Math.abs(goalkeeperPosition - x) <= goalkeeperRange) {
            result.textContent = "The goalkeeper guessed right. You can't score!";
        } else {
            result.textContent = "Goal! You scored!";
        }

        // Reset positions after showing the result
        ball.style.left = '140px';
        ball.style.bottom = '10px';
    }, 500);
}

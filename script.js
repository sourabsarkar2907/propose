document.getElementById('no-button').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('yes-button').innerText = 'Yes';
});

document.getElementById('yes-button').addEventListener('click', function() {
    // Hide all buttons
    document.getElementById('yes-button').style.display = 'none';
    document.getElementById('no-button').style.display = 'none';

    // Display the message
    document.getElementById('message').innerHTML = 
        `The sparkle of your smile is the heartbeat of my heart,
        The light of your eyes is the gift of my life.
        Laboni, without you I am incomplete,
        Sourab’s heart feels empty without you.
        Meeting you is the face of my destiny,
        Losing myself in your love is my greatest habit.

        Nobody can say no to a developer! 🤖💻💖
        You’ve stolen my heart with your code and charm.`;
    document.getElementById('message').style.visibility = 'visible'; // Show the message

    // Create and display the "Close" button
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close Tab';
    closeButton.className = 'close-button';
    closeButton.addEventListener('click', function() {
        window.close(); // Attempt to close the tab
    });

    // Append the "Close" button to the container
    document.querySelector('.form-container').appendChild(closeButton);
});


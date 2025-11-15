// script.js
function updateDateTime() {
    const now = new Date();
    const dateTimeDisplay = document.getElementById('datetime-display');

    // Format the date and time as desired
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDateTime = now.toLocaleDateString(undefined, options);

    dateTimeDisplay.textContent = formattedDateTime;
}

// Call the function once immediately to display the initial time
updateDateTime();

// Update the date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);


const countersData = [
    { id: 'c1ast', title: 'C1AST', startDate: '2026-01-01' },
    { id: 'c2ast', title: 'C2AST', startDate: '2025-01-01' },
    { id: 'c3ast', title: 'C3AST', startDate: '2026-01-01' },
    { id: 'c4ast', title: 'C4AST', startDate: '2026-01-01' },
];

function initializeCounters() {
    const container = document.getElementById('countersContainer');
    countersData.forEach(data => {
        const counterDiv = document.createElement('div');
        counterDiv.className = 'counter-card';
        counterDiv.setAttribute('data-title', data.title.toLowerCase());
        counterDiv.innerHTML = `
            <div class="counter-title">${data.title}</div>
            <div class="counter-display" id="${data.id}-display">0 days</div>
            <button class="reset-btn" onclick="resetStartDate('${data.id}')">Reset</button>
        `;
        container.appendChild(counterDiv);
        updateCounter(data.id, data.startDate);
    });
    // Update all counters every second
    setInterval(updateAllCounters, 1000);
}

function getStoredStartDate(id, defaultDate) {
    // Use localStorage to persist the start date across sessions
    return localStorage.getItem(`startDate_${id}`) || defaultDate;
}

function setStoredStartDate(id, date) {
    localStorage.setItem(`startDate_${id}`, date);
}

function updateAllCounters() {
    countersData.forEach(data => {
        const storedDate = getStoredStartDate(data.id, data.startDate);
        updateCounter(data.id, storedDate);
    });
}

function updateCounter(id, startDateStr) {
    const start = new Date(startDateStr);
    const now = new Date();
    
    // Calculate the next payment date (monthly cycle)
    let nextPaymentDate = new Date(start);
    while (nextPaymentDate < now) {
        nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
    }

    const timeDiff = nextPaymentDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    const displayElement = document.getElementById(`${id}-display`);
    if (displayElement) {
        displayElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

function resetStartDate(id) {
    // Set the new start date to today's date
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    setStoredStartDate(id, todayStr);
    updateCounter(id, todayStr);
    alert(`Start date for ${id} reset to today.`);
}

function filterCounters() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const counters = document.getElementsByClassName('counter-card');

    for (let i = 0; i < counters.length; i++) {
        const title = counters[i].getAttribute('data-title');
        if (title.includes(filter)) {
            counters[i].style.display = ""; // Show the element
        } else {
            counters[i].style.display = "none"; // Hide the element
        }
    }
}

// Initialize the application when the script loads
initializeCounters();

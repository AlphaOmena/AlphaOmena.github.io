document.addEventListener('DOMContentLoaded', () => {
    const barbers = [ 
    {
        id: 1,
        name: 'Lovely The Barber',
        service: 'Cut & Shave',
        photo: 'mkongo1.jpg',
        bio: ''
    }, 

    {
        id: 2,
        name: 'Kennedy Wonder',
        service: 'Hair Styling, Dreadlocks, Die, Shave',
        photo: 'barber1.jpeg',
        bio: ''
    },                   
    
    {
        id: 3,
        name: 'Ben Kaindi',
        service: 'Hair Styling, Color, Die, Shave',
        photo: 'barber2.jpeg',
        bio: ''
    },
    
    {
        id: 4,
        name: 'Colinse Jairo',
        service: 'Quick Trim, Waxing, Hair Growing',
        photo: 'barber3.jpeg',
        bio: ''
    },
    
    {
        id: 5,
        name: 'Diana Prince',
        service: 'Hair Trim, Line Cut, Head Massage',
        photo: 'barber4.jpeg',
        bio: ''
    },
    // Add more barbers as needed
    ];

    const barberListContainer = document.querySelector('.barber-list-container');
    const searchBar = document.getElementById('searchBar');

    function displayBarbers(barberArray) {
        barberListContainer.innerHTML = ''; // Clear previous results
        barberArray.forEach(barber => {
            const card = document.createElement('div');
            card.classList.add('barber-card');
            card.innerHTML = `
                <img src="${barber.photo}" alt="${barber.name} photo">
                <h3>${barber.name}</h3>
                <p><strong>Service:</strong> ${barber.service}</p>
                <p>${barber.bio}</p>
                <button class="booking-btn" onclick="bookAppointment(${barber.id})">Book Now</button>
            `;
            barberListContainer.appendChild(card);
        });
    }

    function bookAppointment(barberId) {
        alert(`Booking appointment with service provider ID: ${barberId}`);
        const phoneNumber = '+254705858736'; // Replace with the actual phone number, including country code
        window.location.href = 'new1.html';



        // Here you would integrate a more complex booking form or API call
    }
    // Make the bookAppointment function globally accessible
    window.bookAppointment = bookAppointment; 


    searchBar.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredBarbers = barbers.filter(barber => {
            // Check if name or service matches search term
            return barber.name.toLowerCase().includes(searchTerm) || 
                   barber.service.toLowerCase().includes(searchTerm);
        });
        displayBarbers(filteredBarbers);
    });

    // Initial display of all barbers
    displayBarbers(barbers);
});



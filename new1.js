document.addEventListener('DOMContentLoaded', () => {
    const contacts = [
        { name: "Love The Barber: 1", location: "Nairobi, Langata & Congo, Goma", phone: "+243970180702" },
        { name: "Ben Kaindi: 2", location: "Nairobi, Sputh B", phone: "+254705858736" },
        { name: "Colinse Jairo: 3", location: "Nairobi, Weslands", phone: "+254705858736" },
        { name: "Diana Prince: 4", location: "Nairobi, Town", phone: "+254705858736" }
    ];

    const contactListDiv = document.getElementById('contactList');
    const searchInput = document.getElementById('searchInput');

    function renderContacts(filteredContacts) {
        contactListDiv.innerHTML = ''; // Clear existing list
        filteredContacts.forEach(contact => {
            const contactItem = document.createElement('div');
            contactItem.classList.add('contact-item');

            const contactInfo = document.createElement('div');
            contactInfo.classList.add('contact-info');
            contactInfo.innerHTML = `
                <h3>${contact.name}</h3>
                <p>${contact.location}</p>
            `;

            const callButton = document.createElement('a');
            callButton.classList.add('call-button');
            callButton.href = `tel:${contact.phone}`; // Direct call link
            callButton.textContent = 'Call';

            contactItem.appendChild(contactInfo);
            contactItem.appendChild(callButton);
            contactListDiv.appendChild(contactItem);
        });
    }

    // Initial render
    renderContacts(contacts);

    // Search functionality
    searchInput.addEventListener('keyup', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm) ||
            contact.location.toLowerCase().includes(searchTerm)
        );
        renderContacts(filteredContacts);
    });
});


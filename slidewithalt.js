const galleryImages = document.getElementById('gallery-images');
const searchInput = document.getElementById('searchslide-input');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const galleryContainer = document.getElementById('galleryContainer');



const images = [

  { src: 'add1.jpg', alt: 'Rabbers & Sneakers', keywords: ['rubbers', 'shoes', 'sneakers'] },
  { src: 'add2.jpeg', alt: 'Shoes', keywords: ['shoes', 'rubbers', 'sneakers'] },
  { src: 'add16.jpeg', alt: 'Clothes & Shoes', keywords: ['shoes', 'clothes', 'dress', 'capes'] },
  { src: 'add4.jpg', alt: 'Ladies Shoes', keywords: ['ladies', 'sandala', 'shoes'] },
  { src: 'add5.jpeg', alt: 'Ladies Shoes', keywords: ['ladies', 'sandals', 'shoes'] },
  { src: 'add6.jpeg', alt: 'Converse Rubbers', keywords: ['shoes', 'rubbers', 'converse'] },
  { src: 'add9.jpg', alt: 'Kids Clothes', keywords: ['kids', 'clothes', 'sweters', 'dress'] },
  { src: 'add8.jpeg', alt: 'Babies Clothes', keywords: ['babies', 'clothes', 'tops'] },
  { src: 'add7.jpeg', alt: 'Babies Clothes', keywords: ['babies', 'clothes', 'sweaters'] },
  { src: 'add10.jpeg', alt: 'Kaki Trousers', keywords: ['men', 'kaki', 'trouser'] },
  { src: 'add3.jpg', alt: 'Ladies Shoes', keywords: ['ladies', 'shoes', 'sandals' ] },
  { src: 'add12.jpeg', alt: 'Kaki Troisers', keywords: ['kaki', 'trouser', 'men'] },
  { src: 'add13.jpeg', alt: 'Jeans & Shirts', keywords: ['jeans', 'trousers', 'men' ] },
  { src: 'add14.jpg', alt: 'Jeans Trousers', keywords: ['jeans', 'trausers', 'men'] },
  { src: 'add15.jpg', alt: 'Dresses', keywords: ['ladies', 'shoes', 'dress', ] },
  { src: 'add1.jpg', alt: 'Shoes', keywords: ['men', 'shoes', 'rubbers'] },
  { src: 'add11.jpeg', alt: 'Kaki Trousers', keywords: ['men', 'kaki', 'trousers'] },
  { src: 'add18.jpeg', alt: 'Sweaters & Jampers', keywords: ['sweaters', 'jampers', 'unisex'] },
  { src: 'add19.jpeg', alt: 'Officials', keywords: ['suits', 'officials', 'men: 0705858736'] },
  { src: 'add20.jpeg', alt: 'Sweaters', keywords: ['sweaters', 'poolovers', 'unisex' ] },
  { src: 'add21.jpeg', alt: 'Tops & Jeans', keywords: ['ladie', 'tops', 'jeans'] },
  { src: 'add22.jpg', alt: 'Night Dress', keywords: ['dress', 'ladies', 'nightdress'] },

    { src: 'coverpg.png', alt: 'Kqurada_Cash Book', keywords: ['track', 'sales'] },
    { src: 'C1AST-1.png', alt: 'C1AST-1', keywords: ['Book', 'this', 'frame'] },
    { src: 'C1AST-2.png', alt: 'C1AST-2', keywords: ['Book', 'this', 'frame'] },
    { src: 'C1AST-3.png', alt: 'C1AST-3', keywords: ['Book', 'this', 'frame'] },
    { src: 'C1AST-4.png', alt: 'C1AST-4', keywords: ['Book', 'this', 'frame'] },
    { src: 'C1AST-5.png', alt: 'C1AST-5', keywords: ['Book', 'this', 'frame'] },
    { src: 'C1AST-6.png', alt: 'C1AST-6', keywords: ['Book', 'this', 'frame'] },
    { src: 'C1AST-7.png', alt: 'C1AST-7', keywords: ['Book', 'this', 'frame'] },
    { src: 'C1AST-8.png', alt: 'C1AST-8', keywords: ['Book', 'this', 'frame'] },
    { src: 'C1AST-9.png', alt: 'C1AST-9', keywords: ['Book', 'this', 'frame'] },
    { src: 'C1AST-10.png', alt: 'C1AST-10', keywords: ['Book', 'this', 'frame'] },

    { src: 'C2AST-1.png', alt: 'C2AST-1', keywords: ['Book', 'this', 'frame'] },
    { src: 'C2AST-2.png', alt: 'C2AST-2', keywords: ['Book', 'this', 'frame'] },
    { src: 'C2AST-3.png', alt: 'C2AST-3', keywords: ['Book', 'this', 'frame'] },
    { src: 'C2AST-4.png', alt: 'C2AST-4', keywords: ['Book', 'this', 'frame'] },
    { src: 'C2AST-5.png', alt: 'C2AST-5', keywords: ['Book', 'this', 'frame'] },
    { src: 'C2AST-6.png', alt: 'C2AST-6', keywords: ['Book', 'this', 'frame'] },
    { src: 'C2AST-7.png', alt: 'C2AST-7', keywords: ['Book', 'this', 'frame'] },
    { src: 'C2AST-8.png', alt: 'C2AST-8', keywords: ['Book', 'this', 'frame'] },
    { src: 'C2AST-9.png', alt: 'C2AST-9', keywords: ['Book', 'this', 'frame'] },
    { src: 'C2AST-10.png', alt: 'C2AST-10', keywords: ['Book', 'this', 'frame'] },

    { src: 'C3AST-1.png', alt: 'C3AST-1', keywords: ['Book', 'this', 'frame'] },
    { src: 'C3AST-2.png', alt: 'C3AST-2', keywords: ['Book', 'this', 'frame'] },
    { src: 'C3AST-3.png', alt: 'C3AST-3', keywords: ['Book', 'this', 'frame'] },
    { src: 'C3AST-4.png', alt: 'C3AST-4', keywords: ['Book', 'this', 'frame'] },
    { src: 'C3AST-5.png', alt: 'C3AST-5', keywords: ['Book', 'this', 'frame'] },
    { src: 'C3AST-6.png', alt: 'C3AST-6', keywords: ['Book', 'this', 'frame'] },
    { src: 'C3AST-7.png', alt: 'C3AST-7', keywords: ['Book', 'this', 'frame'] },
    { src: 'C3AST-8.png', alt: 'C3AST-8', keywords: ['Book', 'this', 'frame'] },
    { src: 'C3AST-9.png', alt: 'C3AST-9', keywords: ['Book', 'this', 'frame'] },
    { src: 'C3AST-10.png', alt: 'C3AST-10', keywords: ['Book', 'this', 'frame'] },

    { src: 'C4AST-1.png', alt: 'C4AST-1', keywords: ['Book', 'this', 'frame'] },
    { src: 'C4AST-2.png', alt: 'C4AST-2', keywords: ['Book', 'this', 'frame'] },
    { src: 'C4AST-3.png', alt: 'C4AST-3', keywords: ['Book', 'this', 'frame'] },
    { src: 'C4AST-4.png', alt: 'C4AST-4', keywords: ['Book', 'this', 'frame'] },
    { src: 'C4AST-5.png', alt: 'C4AST-5', keywords: ['Book', 'this', 'frame'] },
    { src: 'C4AST-6.png', alt: 'C4AST-6', keywords: ['Book', 'this', 'frame'] },
    { src: 'C4AST-7.png', alt: 'C4AST-7', keywords: ['Book', 'this', 'frame'] },
    { src: 'C4AST-8.png', alt: 'C4AST-8', keywords: ['Book', 'this', 'frame'] },
    { src: 'C4AST-9.png', alt: 'C4AST-9', keywords: ['Book', 'this', 'frame'] },
    { src: 'C4AST-10.png', alt: 'C4AST-10', keywords: ['Book', 'this', 'frame'] },

    { src: 'C5AST-1.png', alt: 'C5AST-1', keywords: ['Book', 'this', 'frame'] },
    { src: 'C5AST-2.png', alt: 'C5AST-2', keywords: ['Book', 'this', 'frame'] },
    { src: 'C5AST-3.png', alt: 'C5AST-3', keywords: ['Book', 'this', 'frame'] },
    { src: 'C5AST-4.png', alt: 'C5AST-4', keywords: ['Book', 'this', 'frame'] },
    { src: 'C5AST-5.png', alt: 'C5AST-5', keywords: ['Book', 'this', 'frame'] },
    { src: 'C5AST-6.png', alt: 'C5AST-6', keywords: ['Book', 'this', 'frame'] },
    { src: 'C5AST-7.png', alt: 'C5AST-7', keywords: ['Book', 'this', 'frame'] },
    { src: 'C5AST-8.png', alt: 'C5AST-8', keywords: ['Book', 'this', 'frame'] },
    { src: 'C5AST-9.png', alt: 'C5AST-9', keywords: ['Book', 'this', 'frame'] },
    { src: 'C5AST-10.png', alt: 'C5AST-10', keywords: ['Book', 'this', 'frame'] },

    { src: 'C6AST-1.png', alt: 'C6AST-1', keywords: ['Book', 'this', 'frame'] },
    { src: 'C6AST-2.png', alt: 'C6AST-2', keywords: ['Book', 'this', 'frame'] },
    { src: 'C6AST-3.png', alt: 'C6AST-3', keywords: ['Book', 'this', 'frame'] },
    { src: 'C6AST-4.png', alt: 'C6AST-4', keywords: ['Book', 'this', 'frame'] },
    { src: 'C6AST-5.png', alt: 'C6AST-5', keywords: ['Book', 'this', 'frame'] },
    { src: 'C6AST-6.png', alt: 'C6AST-6', keywords: ['Book', 'this', 'frame'] },
    { src: 'C6AST-7.png', alt: 'C6AST-7', keywords: ['Book', 'this', 'frame'] },
    { src: 'C6AST-8.png', alt: 'C5AST-8', keywords: ['Book', 'this', 'frame'] },
    { src: 'C6AST-9.png', alt: 'C6AST-9', keywords: ['Book', 'this', 'frame'] },
    { src: 'C6AST-10.png', alt: 'C6AST-10', keywords: ['Book', 'this', 'frame'] },

    { src: 'C7AST-1.png', alt: 'C7AST-1', keywords: ['Book', 'this', 'frame'] },
    { src: 'C7AST-2.png', alt: 'C7AST-2', keywords: ['Book', 'this', 'frame'] },
    { src: 'C7AST-3.png', alt: 'C7AST-3', keywords: ['Book', 'this', 'frame'] },
    { src: 'C7AST-4.png', alt: 'C7AST-4', keywords: ['Book', 'this', 'frame'] },
    { src: 'C7AST-5.png', alt: 'C7AST-5', keywords: ['Book', 'this', 'frame'] },
    { src: 'C7AST-6.png', alt: 'C7AST-6', keywords: ['Book', 'this', 'frame'] },
    { src: 'C7AST-7.png', alt: 'C7AST-7', keywords: ['Book', 'this', 'frame'] },
    { src: 'C7AST-8.png', alt: 'C7AST-8', keywords: ['Book', 'this', 'frame'] },
    { src: 'C7AST-9.png', alt: 'C7AST-9', keywords: ['Book', 'this', 'frame'] },
    { src: 'C7AST-10.png', alt: 'C7AST-10', keywords: ['Book', 'this', 'frame'] },

    { src: 'C8AST-1.png' , alt: 'C8AST-1', keywords: ['Book', 'this', 'frame'] },
    { src: 'C8AST-2.png', alt: 'C8AST-2', keywords: ['Book', 'this', 'frame'] },
    { src: 'C8AST-3.png', alt: 'C8AST-3', keywords: ['Book', 'this', 'frame'] },
    { src: 'C8AST-4.png', alt: 'C8AST-4', keywords: ['Book', 'this', 'frame'] },
    { src: 'C8AST-5.png', alt: 'C8AST-5', keywords: ['Book', 'this', 'frame'] },
    { src: 'C8AST-6.png', alt: 'C8AST-6', keywords: ['Book', 'this', 'frame'] },
    { src: 'C8AST-7.png', alt: 'C8AST-7', keywords: ['Book', 'this', 'frame'] },
    { src: 'C8AST-8.png', alt: 'C8AST-8', keywords: ['Book', 'this', 'frame'] },
    { src: 'C8AST-9.png', alt: 'C8AST-9', keywords: ['Book', 'this', 'frame'] },
    { src: 'C8AST-10.png', alt: 'C8AST-10', keywords: ['Book', 'this', 'frame'] },

    { src: 'C9AST-1.png', alt: 'C9AST-1', keywords: ['Book', 'this', 'frame'] },
    { src: 'C9AST-2.png', alt: 'C9AST-2', keywords: ['Book', 'this', 'frame'] },
    { src: 'C9AST-3.png', alt: 'C9AST-3', keywords: ['Book', 'this', 'frame'] },
    { src: 'C9AST-4.png', alt: 'C9AST-4', keywords: ['Book', 'this', 'frame'] },
    { src: 'C9AST-5.png', alt: 'C9AST-5', keywords: ['Book', 'this', 'frame'] },
    { src: 'C9AST-6.png', alt: 'C9AST-6', keywords: ['Book', 'this', 'frame'] },
    { src: 'C9AST-7.png', alt: 'C9AST-7', keywords: ['Book', 'this', 'frame'] },
    { src: 'C9AST-8.png', alt: 'C9AST-8', keywords: ['Book', 'this', 'frame'] },
    { src: 'C9AST-9.png', alt: 'C9AST-9', keywords: ['Book', 'this', 'frame'] },
    { src: 'C9AST-10.png', alt: 'C9AST-10', keywords: ['Book', 'this', 'frame'] },

    { src: 'C10AST-1.png', alt: 'C10AST-1', keywords: ['Book', 'this', 'frame'] },
    { src: 'C10AST-2.png', alt: 'C10AST-2', keywords: ['Book', 'this', 'frame'] },
    { src: 'C10AST-3.png', alt: 'C10AST-3', keywords: ['Book', 'this', 'frame'] },
    { src: 'C10AST-4.png', alt: 'C10AST-4', keywords: ['Book', 'this', 'frame'] },
    { src: 'C10AST-5.png', alt: 'C10AST-5', keywords: ['Book', 'this', 'frame'] },
    { src: 'C10AST-6.png', alt: 'C10AST-6', keywords: ['Book', 'this', 'frame'] },
    { src: 'C10AST-7.png', alt: 'C10AST-7', keywords: ['Book', 'this', 'frame'] },
    { src: 'C10AST-8.png', alt: 'C10AST-8', keywords: ['Book', 'this', 'frame'] },
    { src: 'C10AST-9.png', alt: 'C10AST-9', keywords: ['Book', 'this', 'frame'] },
    { src: 'C10AST-10.png', alt: 'C10AST-10', keywords: ['Book', 'this', 'frame'] }

  // Add more image objects
];

let currentIndex = 0;
let autoScrollInterval;

function renderImages(filteredImages) {
  galleryImages.innerHTML = '';
  filteredImages.forEach(image => {
    const imgElement = document.createElement('div');
    imgElement.classList.add('image-item');
    imgElement.innerHTML = `
            <img src="${image.src}" alt="${image.alt}">
            <div class="image-info">
                <strong>${image.alt}</strong>
            </div>
        `;
        // Add click listener for expansion
        imgElement.addEventListener('click', () => openModal(image));
    galleryImages.appendChild(imgElement);
    
  });
}

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImages.scrollLeft = currentIndex * galleryImages.firstElementChild.offsetWidth;
  }, 2000); // Change image every 3 seconds
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Initial rendering and auto-scroll start
renderImages(images);
startAutoScroll();

// Search functionality
searchInput.addEventListener('input', (event) => {
  stopAutoScroll(); // Stop auto-scroll during search
  const searchTerm = event.target.value.toLowerCase();
  const filteredImages = images.filter(image =>
    image.alt.toLowerCase().includes(searchTerm) ||
    image.keywords.some(keywords => keywords.toLowerCase().includes(searchTerm))
  );
  renderImages(filteredImages);
});

function openModal(image) {
    modal.style.display = "block";
    modalImage.src = image.src.replace('300/200', '800/600'); // Load higher resolution image if possible
    captionText.innerHTML = `<strong>${image.alt}</strong>: ${image.keywords}`;
}

function closeModal() {
    modal.style.display = "none";
}

// Navigation buttons (optional)
prevBtn.addEventListener('click', () => {
  stopAutoScroll();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  galleryImages.scrollLeft = currentIndex * galleryImages.firstElementChild.offsetWidth;
});

nextBtn.addEventListener('click', () => {
  stopAutoScroll();
  currentIndex = (currentIndex + 1) % images.length;
  galleryImages.scrollLeft = currentIndex * galleryImages.firstElementChild.offsetWidth;
});

// Restart auto-scroll when search input is cleared or navigation is done
searchInput.addEventListener('blur', () => {
  if (searchInput.value === '') {
    startAutoScroll();
  }
});

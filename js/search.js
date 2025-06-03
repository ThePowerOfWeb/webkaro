// Get elements
const navSearchInput = document.getElementById('nav-search-input');
const navSearchResultsDropdown = document.getElementById('nav-search-results');

// TODO: Replace with your actual data for places, kuliner, sejarah, budaya
const searchData = [
  { category: 'kuliner', name: 'Ayam Cipera', description: '', image: 'aset/ataskiri.png' },
  { category: 'kuliner', name: 'Tasak Teluk', description: '', image: 'aset/atastengah.png' },
  { category: 'kuliner', name: 'Babi Panggang Karo (BPK)', description: '', image: 'aset/ataskanan.png' },
  { category: 'kuliner', name: 'Gule Bulung Gadung', description: '', image: 'aset/tengahkiri.png' },
  { category: 'kuliner', name: 'Natinombur', description: '', image: 'aset/tengahtengah.png' },
  { category: 'kuliner', name: 'Kidu-kidu', description: '', image: 'aset/tengahkanan.png' },
  { category: 'kuliner', name: 'Pagit-pagit', description: '', image: 'aset/bawahkiri.png' },
  { category: 'kuliner', name: 'Cimpa unung-unung', description: '', image: 'aset/bawahtengah.png' },
  { category: 'kuliner', name: 'Cincang Bohan', description: '', image: 'aset/bawahkanan.png' },
  // Data from tempat.html
  { category: 'tempat', name: 'Desa Barujahe', description: 'Karo, Sumatera Utara, Indonesia', image: 'aset/Oep.png' },
  { category: 'tempat', name: 'Gunung Sinabung', description: 'Karo, Sumatera Utara, Indonesia', image: 'aset/Vani.png' },
  { category: 'tempat', name: 'Air terjun sipiso piso', description: 'Merek, Karo, Sumatera Utara, Indonesia', image: 'aset/Ilyas.png' },
  { category: 'tempat', name: 'Danau lau kawar', description: 'Kaki Gunung Sinabung, Sumatera Utara', image: 'aset/Ipan.png' },
  { category: 'tempat', name: 'Desa Lingga', description: 'Simpang Empat, Karo, Sumatera Utara', image: 'aset/Mutia.png' },
  // Note: Desa Lingga appears twice in tempat.html with different images, including both.
  { category: 'tempat', name: 'Desa Lingga', description: 'Simpang Empat, Karo, Sumatera Utara', image: 'aset/Ilyas.png' },
  // Add more data here for other categories
];

// Add event listener for input in the search input field
navSearchInput.addEventListener('input', () => {
  const searchTerm = navSearchInput.value.toLowerCase();
  navSearchResultsDropdown.innerHTML = ''; // Clear previous results

  if (searchTerm.length === 0) {
    navSearchResultsDropdown.style.display = 'none';
    return;
  }

  const filteredResults = searchData.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm) ||
    item.category.toLowerCase().includes(searchTerm)
  );

  if (filteredResults.length > 0) {
    filteredResults.forEach(item => {
      const resultElement = document.createElement('div');
      resultElement.textContent = `${item.category}: ${item.name}`;

      // Add image display for items with images
      if (item.image) {
          const itemImage = document.createElement('img');
          itemImage.src = item.image;
          itemImage.alt = item.name;
          itemImage.style.width = '50px'; // Adjust size as needed
          itemImage.style.height = 'auto';
          itemImage.style.marginRight = '10px';
          resultElement.prepend(itemImage); // Add image before text
      }

      navSearchResultsDropdown.appendChild(resultElement);
    });
    navSearchResultsDropdown.style.display = 'block';
  } else {
    navSearchResultsDropdown.style.display = 'none';
  }
});

// Hide results dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!navSearchInput.contains(event.target) && !navSearchResultsDropdown.contains(event.target)) {
    navSearchResultsDropdown.style.display = 'none';
  }
}); 
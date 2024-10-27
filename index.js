document.addEventListener('DOMContentLoaded', () => {
    const partForm = document.getElementById('partForm');
    const partsGrid = document.getElementById('partsGrid');
    const searchBar = document.getElementById('searchBar');
    const sortBy = document.getElementById('sortBy');
    
    let parts = [];
  
    partForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const newPart = {
        name: document.getElementById('name').value,
        category: document.getElementById('category').value,
        price: document.getElementById('price').value,
        quantity: document.getElementById('quantity').value,
        supplier: document.getElementById('supplier').value,
        imageURL: document.getElementById('imageURL').value,
        rating: document.getElementById('rating').value,
      };
  
      parts.push(newPart);
      renderParts(parts);
      partForm.reset();
    });
  
    searchBar.addEventListener('input', function () {
      const filteredParts = parts.filter(part =>
        part.name.toLowerCase().includes(searchBar.value.toLowerCase())
      );
      renderParts(filteredParts);
    });
  
    sortBy.addEventListener('change', function () {
      if (sortBy.value === 'price') {
        parts.sort((a, b) => a.price - b.price);
      } else if (sortBy.value === 'rating') {
        parts.sort((a, b) => b.rating - a.rating);
      } else {
        parts.sort((a, b) => a.name.localeCompare(b.name));
      }
      renderParts(parts);
    });
  
    function renderParts(parts) {
      partsGrid.innerHTML = '';
      parts.forEach(part => {
        const partCard = document.createElement('div');
        partCard.classList.add('part-card');
  
        partCard.innerHTML = `
          <img src="${part.imageURL}" alt="${part.name}">
          <h3>${part.name}</h3>
          <div class="part-details">
            <p>Category: ${part.category}</p>
            <p>Price: $${part.price}</p>
            <p>Quantity: ${part.quantity}</p>
            <p>Supplier: ${part.supplier}</p>
            <p>Rating: ${part.rating} / 5</p>
          </div>
          <div class="part-actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
        `;
  
        partsGrid.appendChild(partCard);
      });
    }
  });
  
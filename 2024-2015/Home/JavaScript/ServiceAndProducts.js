// Function to display details for a specific card
function showDetailsAndSetActive(type, cardElement) {
    // Remove active class from all cards
    document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
  
    // Add active class to the clicked card
    cardElement.classList.add('active');
  
    // Show corresponding details based on card clicked
    showDetails(type);
  }
  
  // Function to display details for a specific card
  function showDetails(type) {
    const detailsSection = document.getElementById('details');
    const detailsImage = document.getElementById('details-image');
    const detailsTitle = document.getElementById('details-title');
    const detailsDescription = document.getElementById('details-description');
  
    const subPoints = [
      {
        title: 'Taxi Clone App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et earum nisi reprehenderit, quas, nemo aperiam expedita, voluptates facere natus ratione dolor perspiciatis repudiandae eligendi accusantium illo. Neque, odio enim.',
        points: ['Easy Booking', 'Real-time Tracking', 'Multiple Payment Options', 'Driver Profile', 'Rating System', 'Trip History', 'Push Notifications', 'Ride Scheduling', 'Admin Dashboard'],
        image: 'https://www.peppyocean.com/wp-content/uploads/2020/03/1.png'
      },
      {
        title: 'Food Delivery App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et earum nisi reprehenderit, quas, nemo aperiam expedita, voluptates facere natus ratione dolor perspiciatis repudiandae eligendi accusantium illo. Neque, odio enim.',
        points: ['Restaurant Listings', 'Real-time Tracking', 'Order History', ' Payment Methods', 'Delivery Scheduling', 'Ratings', 'Push Notifications', 'Admin Dashboard', 'Online Payments'],
        image: 'https://www.peppyocean.com/wp-content/uploads/2020/03/2.png'
      },
      {
        title: 'On-Demand Apps',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et earum nisi reprehenderit, quas, nemo aperiam expedita, voluptates facere natus ratione dolor perspiciatis repudiandae eligendi accusantium illo. Neque, odio enim.',
        points: ['Service Booking', 'Multiple Categories', 'Real-time Notifications', 'Payment Integration', 'Rating & Review', 'Scheduling', 'Service Tracking', 'Profile Management', 'Admin Dashboard'],
        image: 'https://www.peppyocean.com/wp-content/uploads/2020/03/3.png'
      },
      {
        title: 'Grocery Clone App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et earum nisi reprehenderit, quas, nemo aperiam expedita, voluptates facere natus ratione dolor perspiciatis repudiandae eligendi accusantium illo. Neque, odio enim.',
        points: ['Product Listings', 'Cart Management', 'Payment Integration', 'Real-time Tracking', 'User Profile', 'Delivery Scheduling', 'Order History', 'Ratings', 'Admin Dashboard'],
        image: 'https://www.peppyocean.com/wp-content/uploads/2020/03/4.png'
      },
      {
        title: 'Other Apps',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et earum nisi reprehenderit, quas, nemo aperiam expedita, voluptates facere natus ratione dolor perspiciatis repudiandae eligendi accusantium illo. Neque, odio enim.',
        points: ['Flexible Solutions', 'Multiple Platforms', 'Real-time Data', 'Push Notifications', 'User Profile', 'Payment Integration', 'Customization', 'Scheduling', 'Support Services'],
        image: 'https://www.peppyocean.com/wp-content/uploads/2020/03/5.png'
      }
    ];
  
    const selectedService = subPoints.find(service => service.title.toLowerCase().includes(type));

    if (selectedService) {
      detailsTitle.textContent = selectedService.title;
      detailsDescription.textContent = selectedService.description;
      detailsImage.src = selectedService.image;
  
      const pointsContainer = document.querySelector('.sub-points');
      pointsContainer.innerHTML = '';
  
      for (let i = 0; i < 3; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
  
        for (let j = 0; j < 3; j++) {
          const col = document.createElement('div');
          col.classList.add('col');
          col.textContent = selectedService.points[i * 3 + j];
          row.appendChild(col);
        }
  
        pointsContainer.appendChild(row);
      }
  
      detailsSection.style.display = 'block';
    }
  }
  
  // Set the first card to be displayed by default on page load
  window.onload = function() {
    const firstCard = document.querySelector('.card');
    firstCard.classList.add('active');  // Mark the first card as active by default
    showDetails(firstCard.getAttribute('data-type')); // Show the details for the first card
  };
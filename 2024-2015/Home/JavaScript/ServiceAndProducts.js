// Function to display details for a specific card
function showDetailsAndSetActive(type, cardElement) {
    // Remove active class from all cards
    document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
  
    // Add active class to the clicked card
    cardElement.classList.add('active');
  
    // Show corresponding details based on card clicked
    showDetails(type);
  }
  
  
  function showDetails(type) {
    const detailsSection = document.getElementById('details');
    const detailsImage = document.getElementById('details-image');
    const detailsTitle = document.getElementById('details-title');
    const detailsDescription = document.getElementById('details-description');

  
   const subPoints = [
  {
    title: 'Construction',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et earum nisi reprehenderit, quas, nemo aperiam expedita, voluptates facere natus ratione dolor perspiciatis repudiandae eligendi accusantium illo. Neque, odio enim.',
    points: [
      'Site Preparation',
      'Material Procurement',
      'Structural Framework',
      'Plumbing ',
      'Roofing and Finishing',
      'Quality Control',
      'Safety Compliance',
      'Time Management',
      'Cost Monitoring'
    ],
    image: '../../../wp-content/uploads/2024/Commercial Projects/7- Angel Complex.jpg'
  },
  {
    title: 'Consultancy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et earum nisi reprehenderit, quas, nemo aperiam expedita, voluptates facere natus ratione dolor perspiciatis repudiandae eligendi accusantium illo. Neque, odio enim.',
    points: [
      'Feasibility Studies',
      'Design Consultation',
      'Material Selection',
      'Regulatory Compliance',
      'Project Planning',
      'Budget Analysis',
      'Risk Assessment',
      'Sustainability Consultation',
      'Client Coordination'
    ],
    image: '../../../wp-content/uploads/2024/Commercial Projects/8- CENTIZEN IT BUILDING.jpg'
  },
  {
    title: 'Estimation and Budgeting',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et earum nisi reprehenderit, quas, nemo aperiam expedita, voluptates facere natus ratione dolor perspiciatis repudiandae eligendi accusantium illo. Neque, odio enim.',
    points: [
      'Cost Estimation',
      'Material Takeoffs',
      'Labor Cost Analysis',
      'Contingency Planning',
      'Cost Tracking',
      'Vendor Management',
      'Bid Preparation',
      'Cash Flow Analysis',
      'Budget Revisions'
    ],
    image: '../../../wp-content/uploads/2024/Commercial Projects/13- ARR MARRIGE HALL.jpg'
  },
  {
    title: 'Building Approvals',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et earum nisi reprehenderit, quas, nemo aperiam expedita, voluptates facere natus ratione dolor perspiciatis repudiandae eligendi accusantium illo. Neque, odio enim.',
    points: [
      'Zoning Clearance',
      'Architectural Approvals',
      'Environmental Impact ',
      'Utility Connections',
      'Fire Safety Certification',
      'Structural Certifications',
      'Site Inspection ',
      'Documentation Support',
      'Approval Follow-ups'
    ],
    image: '../../../wp-content/uploads/2024/Commercial Projects/70- PEB SEYED COTTON MILL.jpg'
  },
  {
    title: 'Project Management Consultancy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et earum nisi reprehenderit, quas, nemo aperiam expedita, voluptates facere natus ratione dolor perspiciatis repudiandae eligendi accusantium illo. Neque, odio enim.',
    points: [
      'Project Scheduling',
      'Resource Allocation',
      'Team Coordination',
      'Progress Monitoring',
      'Risk Management',
      'Stakeholder',
      'Change Management',
      'Performance Evaluation',
      'Project Handover'
    ],
    image: '../../../wp-content/uploads/2024/Commercial Projects/31.07.24-AATHIRA HOSPITAL ELEVATION DESIGN 1-8-24.jpg'
  }
];

  
    const selectedService = subPoints.find(service => service.title.toLowerCase().includes(type.toLowerCase()));

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
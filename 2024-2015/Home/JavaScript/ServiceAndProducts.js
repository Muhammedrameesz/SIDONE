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
    image: 'https://img.freepik.com/free-photo/crane-building-construction-site-filtered-image-processed_1232-2707.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid'
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
    image: 'https://img.freepik.com/free-photo/man-with-tablet-chatting-with-colleagues_23-2147787532.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid'
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
    image: 'https://img.freepik.com/free-vector/tax-elements-composition-isometric_98292-6836.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid'
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
    image: 'https://img.freepik.com/free-vector/architectural-project-approval-safety-check-construction-quality-control-construction-quality-management-hire-your-quality-technician-concept_335657-701.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid'
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
    image: 'https://img.freepik.com/free-photo/business-scene-top-view_23-2147626514.jpg?uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais_hybrid'
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
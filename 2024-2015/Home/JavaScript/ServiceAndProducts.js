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
    description: 'At Sidone Infrastructure, we bring unmatched expertise and dedication to every project, transforming visions into reality. Our construction services cater to a wide range of needs, including residential and commercial projects, ensuring quality, innovation, and client satisfaction at every step.',
    points: [
      'Site Preparation',
      'Material Procurement',
     
      
    ],
    sub:[
      {
        title:"Residential Construction",
        des:"Sidone Infrastructure specializes in building homes that reflect your aspirations and lifestyle. From cozy apartments to luxurious villas, we deliver spaces designed for comfort, functionality, and aesthetic appeal."
      },
      {
        title:"Commercial Construction",
        des:"Sidone Infrastructure offers top-notch commercial construction services that meet the dynamic demands of modern businesses. Whether it’s sleek office spaces or bustling retail complexes, we deliver high-quality solutions tailored to your operational needs."
      },
    ],
    image: '../../../wp-content/uploads/2025/Services/Construction.jpg'
  },
  {
    title: 'Design',
    description: 'Welcome to Sidone, your trusted partner for architectural and structural design. At Sidone, we are committed to transforming your ideas into remarkable realities.',
    points: [
      'Feasibility Studies',
      'Design Consultation',
     
    ],
    sub: [
      {
        title: "Architectural Designs",
        des: "At Sidone, we excel in delivering comprehensive architectural design solutions tailored to your needs. Our team of skilled architects collaborates closely with you to create designs that perfectly blend functionality, aesthetics, and sustainability.",
      },
      {
        title: "Structural Designs",
        des: "Our structural design consultancy focuses on creating robust, efficient, and safe structures that stand the test of time. Sidone’s experienced structural engineers use advanced techniques and state-of-the-art tools to design systems that are both durable and cost-effective",
      },
    ],
    image: '../../../wp-content/uploads/2025/Services/Design.jpg'
  },
  {
    title: 'Estimation and Budgeting',
    description: 'At Sidone Infrastructure, we understand that precise estimation and budgeting are the cornerstones of successful construction projects. Our expertise lies in providing accurate, detailed, and transparent cost assessments to help you plan effectively and achieve your goals within the desired budget.',
    points: [
      'Cost Estimation',
      'Material Takeoffs',
     
    ],
    sub: [
      {
        title: "Comprehensive Project Evaluation",
        des: "Our team meticulously evaluates every aspect of your project, from design specifications to construction requirements, ensuring nothing is overlooked.",
      },
      {
        title: "Material and Resource Analysis",
        des: "We assess the cost and availability of materials, labor, equipment, and other resources essential to your project.",
      },
      {
        title: "Customized Budget Planning",
        des: "Tailored solutions are crafted to meet your specific needs, ensuring financial efficiency without compromising quality.",
      },
      {
        title: "Risk Management and Cost Control",
        des: "We identify potential risks and provide strategies to mitigate unexpected costs, helping you stay on track.",
      },
    ],
    image: '../../../wp-content/uploads/2025/Services/Estimation and Budgeting.jpg'
  },
  {
    title: 'Building Approvals',
    description: 'As a leading name in the industry, we leverage our expertise and connections to streamline the approval process, save your time and effort while ensuring full compliance with all regulatory standards.',
    points: [
      'Zoning Clearance',
      'Architectural Approvals',
      
    ],
    sub: [
      {
        title: "Construction Engineering Approvals",
        des: "Navigating the complexities of construction permits with precision, ensuring your project adheres to all local building codes and regulations.",
      },
      {
        title: "Structural Engineering Approvals",
        des: "With our team of skilled structural engineers, we provide approvals that guarantee the safety, stability, and integrity of your construction.",
      },
      {
        title: "Residential Engineering Approvals",
        des: "Whether you're building a single-family home or a residential complex, we secure all necessary permissions to bring your vision to life.",
      },
      {
        title: "Registered Developers Support",
        des: "Partnering with registered developers, we offer seamless guidance and approvals for large-scale housing and commercial projects.",
      },
    ],
    image: '../../../wp-content/uploads/2025/Services/Building Approvals.jpg'
  },
  {
    title: 'Project Management Consultancy',
    description: 'Our experienced team ensures that every aspect of the approval process is handled efficiently, keeping your project compliant with local regulations and standards. From documentation to liaising with authorities, we take care of it all, so you can focus on your project.',
    points: [
      'Project Scheduling',
      'Resource Allocation',
      
    ],
    sub: [
      {
        title: "Planning",
        des: "We meticulously plan every step of the building approval process, identifying requirements, preparing documentation, and establishing timelines to ensure smooth and timely submissions.",
      },
      {
        title: "Scheduling",
        des: "Our team creates a detailed schedule for all approval-related tasks, coordinating with regulatory bodies and stakeholders to meet deadlines without delays.",
      },
      {
        title: "Tracking",
        des: "We provide real-time updates on the status of approvals, keeping you informed at every step. Our tracking systems ensure transparency and accountability throughout the process",
      },
      {
        title: "Controlling",
        des: "Sidone Infrastructure maintains strict control over the approval process, addressing potential roadblocks, monitoring progress, and ensuring compliance at every stage.",
      },
      
    ],
    image: '../../../wp-content/uploads/2025/Services/Management Consultancy.jpg'
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
  
        // for (let j = 0; j < 3; j++) {
        //   const col = document.createElement('div');
        //   col.classList.add('col');
        //   col.textContent = selectedService.points[i * 3 + j];
        //   row.appendChild(col);
        // }
  
        pointsContainer.appendChild(row);
      }
  
      detailsSection.style.display = 'block';
    }
      // Populate cards
      const cardsContainer = document.querySelector('.cards-container-2nd');
      cardsContainer.innerHTML = '';
      selectedService.sub.forEach(sub => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h4 class="card-title">${sub.title}</h4>
          <p class="card-description">${sub.des}</p>
        `;
        cardsContainer.appendChild(card);
      });
  
      detailsSection.style.display = 'block';
    }
  
  
  
  // Set the first card to be displayed by default on page load
  window.onload = function() {
    const firstCard = document.querySelector('.card');
    firstCard.classList.add('active');  // Mark the first card as active by default
    showDetails(firstCard.getAttribute('data-type')); // Show the details for the first card
  };
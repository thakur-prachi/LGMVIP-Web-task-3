
// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;
    const skills = Array.from(document.querySelectorAll('input[name="skill"]:checked')).map(skill => skill.value);
    const image = document.getElementById('img').files[0];
  
    // Display the captured data
    displayRegistrationDetails(name, email, gender, skills, image);
  
    // Clear the form
    document.getElementById('registrationForm').reset();
  }
  
  // Function to display registration details
  function displayRegistrationDetails(name, email, gender, skills, image) {
    const displayDiv = document.querySelector('.display');
  
    // Create a new registration details element
    const registrationDetails = document.createElement('div');
    registrationDetails.classList.add('c');
  
    // Create elements to display registration data
    const nameElement = document.createElement('div');
    nameElement.textContent = `Name: ${name}`;
  
    const emailElement = document.createElement('div');
    emailElement.textContent = `Email: ${email}`;
  
    const genderElement = document.createElement('div');
    genderElement.textContent = `Gender: ${gender}`;
  
    const skillsElement = document.createElement('div');
    skillsElement.textContent = `Skills: ${skills.join(', ')}`;
  
    // Create an image element to display the uploaded image
    const imgElement = document.createElement('img');
    imgElement.classList.add('img');
    if (image) {
      const imageUrl = URL.createObjectURL(image);
      imgElement.src = imageUrl;
    }
  
    // Append elements to the registration details element
    registrationDetails.appendChild(nameElement);
    registrationDetails.appendChild(emailElement);
    registrationDetails.appendChild(genderElement);
    registrationDetails.appendChild(skillsElement);
    registrationDetails.appendChild(imgElement);
  
    // Append the registration details element to the display div
    displayDiv.appendChild(registrationDetails);
  }
  
  // Attach a submit event listener to the form
  const registrationForm = document.getElementById('registrationForm');
  registrationForm.addEventListener('submit', handleFormSubmit);
  
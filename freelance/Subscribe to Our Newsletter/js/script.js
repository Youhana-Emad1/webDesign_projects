document.getElementById('signupForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevent form submission  

    // Clear previous error messages  
    document.getElementById('nameError').textContent = '';  
    document.getElementById('emailError').textContent = '';  

    // Get input values  
    const name = document.getElementById('name').value.trim();  
    const email = document.getElementById('email').value.trim();  
    
    let valid = true;  

    // Validate name  
    if (name === '') {  
        document.getElementById('nameError').textContent = 'Name is required';  
        valid = false;  
    }  

    // Validate email format  
    if (email === '') {  
        document.getElementById('emailError').textContent = 'Email is required';  
        valid = false;  
    } else if (!validateEmail(email)) {  
        document.getElementById('emailError').textContent = 'Please enter a valid email address';  
        valid = false;  
    }  

    // If valid, proceed with form submission (simulated)  
    if (valid) {  
        alert('Thank you for subscribing, ' + name + '!');   
    }  
});  

// Function to validate email format  
function validateEmail(email) {  
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    return regex.test(email);  
}  
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const designation = document.getElementById('designation').value;
    const linkedin = document.getElementById('linkedin').value;
    const collegeYears = document.getElementById('collegeYears').value;

    // Create a new object to hold registration data
    const registrationData = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        designation: designation,
        linkedin: linkedin,
        collegeYears: collegeYears
    };

    // Log the data to the console for now (later, send this to a server)
    console.log('Registration Data:', registrationData);
    
    // You can later send this data to a backend server to store in the database
});

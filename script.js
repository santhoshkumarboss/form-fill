document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('myForm');
    var status = document.getElementById('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            dob: document.getElementById('dob').value
            // Add more fields as needed
        };

        // Store form data in localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Provide feedback to the user
        status.textContent = 'Form data saved to localStorage!';
    });

    // Check if there's existing data on page load
    var storedData = localStorage.getItem('formData');
    if (storedData) {
        var retrievedData = JSON.parse(storedData);
        document.getElementById('name').value = retrievedData.name;
        document.getElementById('email').value = retrievedData.email;
        document.getElementById('dob').value = retrievedData.dob;
        status.textContent = 'Loaded saved data from localStorage!';
    }
});
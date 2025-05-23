function sanitizeInput(value) {
    return value.trim().replace(/[<>]/g, ''); // Remove basic HTML injection vectors
}


document.getElementById('dataForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
        username: sanitizeInput(document.getElementById('username').value),
        email: sanitizeInput(document.getElementById('email').value),
    };

    try {
        const response = await fetch('/api/datainput', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Tell the server you send JSON
            },
            body: JSON.stringify(data),  // Send the JSON stringified data
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result);
            alert('Form submitted successfully!');
        } else {
            console.error('Error:', response.statusText);
            alert('Error submitting form');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Network error occurred');
    }
});
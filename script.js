//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    // Validation
    if (!name || !age) {
        alert("Please enter valid details.");
        return;
    }

    // Create a promise that resolves or rejects based on age
    const votingPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000); // 4 seconds delay
    });

    // Handle the promise
    votingPromise
        .then(message => alert(message))
        .catch(errorMessage => alert(errorMessage));
});
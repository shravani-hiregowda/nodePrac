
document.getElementById('user-form').addEventListener('submit', async (e)=> {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({name, email})
    });

    const data = await response.json();
    console.log(data);

})
const encodedToken = document.getElementById('encoded-token');
const server = new Jwtserver();

// Decode the token
encodedToken.addEventListener('keyup', e => {
    const token = e.target.value;
    if (token !== '') {
        console.log(token);
        const body = { "token": token };
        console.log(body);
        server.post('https://parsamjwt.herokuapp.com/decode/token', body)
            .then(data => console.log(data));
    }
})
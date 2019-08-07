const server = new Jwtserver();
const ui = new Ui();
const encodedToken = document.getElementById('encoded-token');


// Decode the token
encodedToken.addEventListener('keyup', e => {
    const token = e.target.value;
    if (token !== '') {
        const body = { "token": token };
        server.post('https://parsamjwt.herokuapp.com/decode/token', body)
            .then(data => {
                if (data === '') {
                    alert('Something Error');
                } else {
                    ui.showDetails(data);
                }
            });
    }
})
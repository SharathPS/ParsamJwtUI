const server = new Jwtserver();
const ui = new Ui();
const encodedToken = document.getElementById('encoded-token');
const secretUi = document.getElementById('secret');


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
                    ui.showDecodedToken(data);
                }
            })
            .catch(err => alert(err));
    }
})

// Validate Signature
secretUi.addEventListener('keyup', e => {
    const secret = e.target.value;
    if (secret !== '') {
        const body = { "secret": secret };
        server.post('https://parsamjwt.herokuapp.com/verify/token', body)
            .then(data => {
                if (!data.verified) {
                    ui.isInvalidSignature();
                } else {
                    ui.isValidSignature();
                }
            })
            .catch(err => alert(err));
    }
})
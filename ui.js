class Ui {
    constructor() {
        this.headerUi = document.getElementById('decoded-header');
        this.payloadUi = document.getElementById('decoded-payload');
        this.signUi = document.getElementById('decoded-signature');
    }

    showDetails(data) {
        this.headerUi.value = JSON.stringify(data.header, null, 1);
        M.textareaAutoResize(this.headerUi);
        this.payloadUi.value = JSON.stringify(data.payload, null, 1);
        M.textareaAutoResize(this.payloadUi);
        this.signUi.value = JSON.stringify(data.signature, null, 1);
        M.textareaAutoResize(this.signUi);
    }
}
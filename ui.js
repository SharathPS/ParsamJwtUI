class Ui {
    constructor() {
        this.headerUi = document.getElementById('decoded-header');
        this.payloadUi = document.getElementById('decoded-payload');
        this.signUi = document.getElementById('decoded-signature');
        this.tokenHistoryUi = document.getElementById('token-history');
        this.secretUi = document.getElementById('secret');
        this.hideFields(this.tokenHistoryUi, this.secretUi);
    }

    autoziseTextArea(...args) {
        args.forEach(element =>
            M.textareaAutoResize(element));
    }

    hideFields(...fields) {
        fields.forEach(field => field.className = ' hide');
    }

    updateColor(col, ...fields) {
        fields.forEach(field => field.className += col);
    }

    updateTextArea(field, data, col) {
        field.value = JSON.stringify(data, null, 1);
        this.updateColor(' blue-text text-darken-2', field);
    }

    showDecodedToken(data) {
        this.updateTextArea(this.headerUi, data.header);
        this.updateTextArea(this.payloadUi, data.payload);
        this.updateTextArea(this.signUi, data.signature);
        this.autoziseTextArea(this.headerUi, this.payloadUi, this.signUi);
        this.secretUi.className = "validate";
    }

    isValidSignature() {
        this.hideFields(this.secretUi);
        this.updateColor(' light-green', this.headerUi, this.payloadUi, this.signUi);
    }

    isInvalidSignature() {
        this.updateColor(' red accent-1', this.headerUi, this.payloadUi, this.signUi);
    }
}
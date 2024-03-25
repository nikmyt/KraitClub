//Nwm, Mistral is actually dumb as bricks.

const ApiClient = {
    backend: "http://localhost:8080", //ah, a comma! now that is vueriffic

    async getChungus() {
        try {
            const response = await fetch(this.backend + '/chungus');

            if (!response.ok) {
                throw new Error('GET request failed!');
            }

            const text = await response.text();
            return text;
        } catch (err) {
            console.error('Error in getChungus:', err.message);
            throw err;
        }
    },

    //Mistral you fucking idiot. This is not a GET, this is a POST!!!
    //ok its a get now
    async sendNudes(nudeType) {
        try {
            const response = await fetch(this.backend + "/sendnudes/" + nudeType, {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error('POST request failed!');
            }

            const text = await response.text();
            return text;
        } catch (err) {
            console.error('Error in sendNudes:', err.message);
            throw err;
        }
    },
};

export default ApiClient;
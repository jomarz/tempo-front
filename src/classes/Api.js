export default class TempoAPI {
    constructor() {
        this.APIUrl = "https://tempo.api.wittrees.com/api/";
    }
    call(service, _data, handlerFunction) {

        const url = `${this.APIUrl}${service}.php`;

        const data = new FormData();

        for (const div in _data) {
            data.append(div, _data[div]);
        }

        const requestOptions = {
            crossDomain: true,
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' },
            // mode: 'same-origin',
            body: data,
        };

        fetch(url, requestOptions)
            .then(response => {
                return response.json();
            })
            .then(data => {
                handlerFunction(data);
                //console.log(data);
            })
            .catch(error => {
                console.error('Error:', error); 
            });

    }
}

import TempoAPI from './TempoAPI';

export default class ContactAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'contact_form';
    }

    sendContactForm(email, name, message, handler)
    {
        const data = {
            email: email,
            name: name,
            message: message
        };
        this.makeAPICall(this.serviceName, data, handler);
    }
}
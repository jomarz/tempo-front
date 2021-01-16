import TempoAPI from './TempoAPI'

export default class SearchAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'get_search_results';
        this.dummy = {
            0: {
                id: '1',
                permalink: 'aaa',
                postType: 'bbb',
                title: 'Orquesta de Cámara de Colombia',
                subtitle: 'Cartagena Music Festival 2020'
            },
            1: {
                id: '2',
                permalink: 'aaa',
                postType: 'bbb',
                title: 'Orquesta de Cámara de Colombia',
                subtitle: 'Cartagena Music Festival 2020'
            },
            2: {
                id: '3',
                permalink: 'aaa',
                postType: 'bbb',
                title: 'Orquesta de Cámara de Colombia',
                subtitle: 'Cartagena Music Festival 2020'
            },
            3: {
                id: '4',
                permalink: 'aaa',
                postType: 'bbb',
                title: 'Orquesta de Cámara de Colombia',
                subtitle: 'Cartagena Music Festival 2020'
            },
            4: {
                id: '5',
                permalink: 'aaa',
                postType: 'bbb',
                title: 'Orquesta de Cámara de Colombia',
                subtitle: 'Cartagena Music Festival 2020'
            },
            5: {
                id: '6',
                permalink: 'aaa',
                postType: 'bbb',
                title: 'Orquesta de Cámara de Colombia',
                subtitle: 'Cartagena Music Festival 2020'
            },
            6: {
                id: '7',
                permalink: 'aaa',
                postType: 'bbb',
                title: 'Orquesta de Cámara de Colombia',
                subtitle: 'Cartagena Music Festival 2020'
            }
        };
    }
    getSearchResults(searchString, handler)
    {
        //const data = { searchString: searchString }
        //this.makeAPICall(this.serviceName, data, handler);
        const dummyResults = {
            data: this.dummy
        };
        handler(dummyResults);
    }
}
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
                title: 'aaccca ddd',
                subtitle: 'dddd'
            },
            1: {
                id: '1',
                permalink: 'aaa',
                postType: 'bbb',
                title: 'aaccca ddd',
                subtitle: 'dddd'
            },
            2: {
                id: '1',
                permalink: 'aaa',
                postType: 'bbb',
                title: 'aaccca ddd',
                subtitle: 'dddd'
            },
            3: {
                id: '1',
                permalink: 'aaa',
                postType: 'bbb',
                title: 'aaccca ddd',
                subtitle: 'dddd'
            },
            4: {
                id: '1',
                permalink: 'aaa',
                postType: 'bbb',
                title: 'aaccca ddd',
                subtitle: 'dddd'
            },
            5: {
                id: '1',
                permalink: 'aaa',
                postType: 'bbb',
                title: 'aaccca ddd',
                subtitle: 'dddd'
            },
            6: {
                id: '1',
                permalink: 'aaa',
                postType: 'bbb',
                title: 'aaccca ddd',
                subtitle: 'dddd'
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
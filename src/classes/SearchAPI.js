import TempoAPI from './TempoAPI'

export default class SearchAPI extends TempoAPI
{
    constructor()
    {
        super();
        this.serviceName = 'get_search_results';
    }
    getSearchResults(searchString, handler)
    {
        const data = { searchString: searchString }
        this.makeAPICall(this.serviceName, data, handler);
    }
}
export default class AdsList
{
    constructor(pagePositions = [])
    {
        this.pagePositions = pagePositions;
        this.adsList = {};
        // Initialize with false value in each position
        pagePositions.forEach(position => {
            this.adsList[position] = false;
        });
    }

    buildAdList(adsObj = {})
    {console.log(this.pagePositions);
        this.pagePositions.forEach(position => {
            if((adsObj[position] != undefined)) {
                this.adsList[position] = adsObj[position]; 
                //this.adsList[position] = false;  // Uncomment if no ads are comming and comment previous line
            }
            else    this.adsList[position] = false;
        });
        return this.adsList;
    }
    
    getAdsList()
    {
        return this.adsList;
    }
}
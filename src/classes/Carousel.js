import { ref } from 'vue';

export default class Carousel {
    constructor(numPages, elemsPerPage, listExtender = false) {
        this.numPages = ref(numPages);
        this.elemsPerPage = ref(elemsPerPage);
        this.currentPage = ref(1);
        this.listExtender = listExtender;
    }
    moveUp() {
        if(this.currentPage.value>1) this.currentPage.value -= 1;
    }
    moveDown() { 
        if(this.currentPage.value<this.numPages.value) this.currentPage.value += 1;
        else if( this.listExtender && this.currentPage.value==this.numPages.value) this.listExtender();
    }
    setNumPages(listLength) {
        this.numPages.value = Math.ceil(listLength/this.elemsPerPage.value);
    }
    setElemsPerPage(num) {
        this.elemsPerPage.value = num;
    }
    setListExtender(listExtender) {
        // Takes in a funtion to call when going beyond the last page.
        this.listExtender = listExtender;
    }
    getCurrentPageList(list) {
        if (typeof list == 'object' && typeof list.length == 'undefined'){
            return Object.entries(list).slice((this.currentPage.value-1)*this.elemsPerPage.value, this.currentPage.value*this.elemsPerPage.value).map(entry => entry[1]);
        }
        return list.slice((this.currentPage.value-1)*this.elemsPerPage.value,this.currentPage.value*this.elemsPerPage.value);
    }
}
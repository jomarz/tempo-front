import { ref } from 'vue';

export default class Carousel {
    constructor(numPages, elemsPerPage) {
        this.numPages = ref(numPages);
        this.elemsPerPage = ref(elemsPerPage);
        this.currentPage = ref(1);
    }
    moveUp() {
        if(this.currentPage.value>1) this.currentPage.value -= 1;
    }
    moveDown() { 
        if(this.currentPage.value<this.numPages.value) this.currentPage.value += 1;
    }
    setNumPages(listLength) {
        this.numPages.value = Math.ceil(listLength/this.elemsPerPage.value);
    }
    setElemsPerPage(num) {
        this.elemsPerPage.value = num;
    }
    getCurrentPageList(list) {
        if (typeof list == 'object' && typeof list.length == 'undefined'){
            return Object.entries(list).slice((this.currentPage.value-1)*this.elemsPerPage.value, this.currentPage.value*this.elemsPerPage.value).map(entry => entry[1]);
        }
        return list.slice((this.currentPage.value-1)*this.elemsPerPage.value,this.currentPage.value*this.elemsPerPage.value);
    }
}
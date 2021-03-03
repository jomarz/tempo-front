<template>
    <div class="searchbox-container">
        <div class="search-box md-up">
            <input type="text" class='search-input' v-model="searchInput" @keyup="handleInput" />
            <svg viewBox="0 0 16 16" class="bi bi-search text-muted search-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            </svg>
        </div>
        <div class="search-results-container">
            <search-results :class="{'show': showResults, 'hide': !showResults}" :resultsList="resultsList" @close-results="closeResults()" @clear-search-input="cleanSearchInput()" />
        </div>
        <div class="mobile-search-box sm-only">
            <input type="text" class='search-input' ref="searchInput" v-model="searchInput" @keyup="handleInput" />
        </div>
    </div>    
</template>

<script>
import { ref } from 'vue';
import SearchAPI from '../classes/SearchAPI';
import SearchResults from './SearchResults.vue';

export default {
    name: 'SearchBox',
    props: {
        focusOnInput: {}
    },
    setup()
    {
        const searchAPI = new SearchAPI();
        var showResults = ref(false);
        var resultsList = ref([]);

        return { searchAPI, resultsList, showResults }
    },
    components: {
        SearchResults
    },
    methods: {
        closeResults() 
        {
            this.showResults = false;
        },
        handleInput(e)
        {
            if(e.keyCode === 13) {
                this.searchAPI.getSearchResults(this.searchInput, (data) => {
                    this.resultsList = data.data.articles.concat(data.data.events);
                    this.showResults = true;
                    });

            }
        },
        cleanSearchInput()
        {
            this.searchInput = "";
        }
    },
    mounted() {
        this.$refs.searchInput.focus();
    }
}
</script>

<style lang="scss" scoped>
    .search-box {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .search-results-container {
        margin-top: 15px;
        background-color: white;
        .show {
            display: block;
        }
        .hide {
            display: none;
        }
    }
    .search-input {
        height: 1.5rem;
        font-size: 1rem;
        border-width: 1px 0px 1px 1px;
        border-style: solid;
        border-color: #bcbec0;
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        padding: 4px 9px;
        margin-right: -1px;
    }
    .search-input:focus {
        outline: none;
    }
    .search-icon {
        height: 1.5rem;
        width: 1.8rem;
        border-width: 1px 1px 1px 0px;
        border-style: solid;
        border-color: #bcbec0;
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
        padding: 1px 9px 1px 2px;
    }

    @media only screen and (max-width: 767px) {
        .search-input {
            height: 1.2rem;
            width: 100%;
            margin: 15px 0;
            font-size: 1rem;
            border-width: 1px 1px 1px 1px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        .search-icon {
            height: 1.2rem;
            width: 1.3rem;
        }
    }
</style>
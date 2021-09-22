<template>
    <div class="modal-main-display">
        <div v-if="contentType==='event'" class="info-box md-up">
            <feat-info-event :featuredInfo="content" class="article-modal-info"/>
        </div>
        <div class="media-box" :class="{fullWidthMedia: contentType==='article'}">
            <!-- Slideshow container -->
            <div class="slideshow-container" :class="hideSlides">
                <template v-for="(media, index) in mediaFullList" :key="media.mediaId">
                    <div v-if="media.mediaType=='imgUrl'" class="mySlides fades media-img" :class="{firstslide: index==0}">
                        <img :src="media.url" style="width:100%">
                    </div>
                    <div v-else-if="media.mediaType=='VideoUrl'" class="mySlides fades media-video" :class="{firstslide: index==0}">
                        <iframe :src="media.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div v-else-if="media.mediaType=='playlistUrl'" class="mySlides fades media-audio" :class="{firstslide: index==0}">
                        <iframe :src="media.url" frameborder="0" allowtransparency="true" allow="encrypted-media;" allowfullscreen></iframe>
                    </div>
                    <div v-else-if="media.mediaType=='timeLineUrl'" class="mySlides fades media-timeline" :class="{firstslide: index==0}">
                        <img :src="media.url" v-on:click="openInfograph(media.url)">
                    </div>

                </template>

            <!-- Next and previous buttons -->
            <a class="prev" @click="plusSlides(-1)">&#10094;</a>
            <a class="next" @click="plusSlides(1)">&#10095;</a>
            </div>
        </div>
    </div>  
    <media-controls class="article-media-controls" @jump-to-type="jumpToMediaType" />
    <div v-if="contentType==='article'" class="info-box">
        <ArticleModalInfoBox :featuredInfo="content"/>
    </div>
    <div v-else-if="contentType==='event'" class="lower-info-box-event">
        <event-modal-lower-info-box :featuredInfo="content"/>
    </div>
</template>

<script>
import { ref } from 'vue'
import store from '../store/store.js';
import FeatInfoEvent from './FeatInfoEvent.vue'
import MediaControls from './MediaControls.vue'
import ArticleModalInfoBox from './ArticleModalInfoBox'
import MediaAPI from '../classes/MediaAPI'
import EventModalLowerInfoBox from './EventModalLowerInfoBox'

export default {
    components: { FeatInfoEvent, MediaControls, ArticleModalInfoBox, EventModalLowerInfoBox },
    props: {
        contentType: {
            required: true,
            type: String
        },
        content: {
            required: true,
            type: Object
        },
        contentId: {
            required: true
        },
        isEvent: {
            required: true
        },
        featuredImg: {
            type: String
        }
    },
    setup(props) {
        var slideIndex = 1;
        const emptyMedia = [
            {
                mediaId: 1,
                mediaType: "imgUrl",
                url: props.featuredImg
            },
        ];
        var mediaFullList = ref(emptyMedia);
        var hideSlides = ref(true);
        console.log(props.content);
        /* const dummy = [
            {
                mediaId: 1,
                mediaType: "VideoUrl",
                url: 'https://www.youtube.com/embed/UL1qpV6YtAE'
            },
            {
                mediaId: 2,
                mediaType: "VideoUrl",
                url: 'https://www.youtube.com/embed/lGRwO9Dle6E'
            },
            {
                mediaId: 3,
                mediaType: "VideoUrl",
                url: 'https://www.youtube.com/embed/_x2QIJyxJQA'
            },
            {
                mediaId: 4,
                mediaType: "imgUrl",
                url: 'https://tempo.wittrees.com/media/imgTest/190711-191403.png'
            },
            {
                mediaId: 5,
                mediaType: "imgUrl",
                url: 'https://tempo.wittrees.com/media/imgTest/190711-191012.png'
            },
            {
                mediaId: 6,
                mediaType: "imgUrl",
                url: 'https://tempo.wittrees.com/media/imgTest/190711-190430.png'
            },
            {
                mediaId: 7,
                mediaType: "playlistUrl",
                url: 'https://open.spotify.com/embed/playlist/37i9dQZEVXbKrooeK9WSFF?height=300&amp;theme-id=0&amp;default-tab=css,result&amp;embed-version=2o.wittrees.com/media/imgTest/190711-190430.png'
            },
        ]; */
        const mediaAPI = new MediaAPI();
        mediaAPI.getMedia(store.articleData.id, store.articleData.permalink, store.articleData.isEvent, (data) => {
            if(data.data == null)   {
                //mediaFullList.value = dummy;
                }
            else {
                mediaFullList.value = data.data.mediaComponents;
                hideSlides.value = false;
            }
        });
        /* mediaFullList.value = mediaAPI.getDummyMedia(); */
        return { store, slideIndex, mediaFullList, hideSlides }
    },
    methods: {
        // Next/previous controls
        plusSlides(n) {
            this.showSlides(this.slideIndex += n);
        },
        // Thumbnail image controls
        currentSlide(n) {
            this.showSlides(this.slideIndex = n);
        },
        showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            //var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {this.slideIndex = 1}
            if (n < 1) {this.slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            /* for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            } */
            slides[this.slideIndex-1].style.display = "block";
            //dots[this.slideIndex-1].className += " active";
        },
        getFirstOfType(mediaType) {
            return this.mediaFullList.findIndex((element) => element.mediaType == mediaType);
        },
        jumpToMediaType(mediaType) {
            const newIndex = this.getFirstOfType(mediaType);
            if(newIndex != -1)  this.currentSlide(newIndex+1);
        },
        openInfograph(url) {
            this.store.setInfographUrl(url);
            this.store.toggleInfograph();
        }
    },
    mounted() {
        /* console.log(this.slideIndex);
        console.log(this.mediaFullList); */
        //this.showSlides(this.slideIndex);
    }
}
</script>

<style lang="scss" scoped>

    .lower-info-box-event {
        display: none; // For smaller screens will be vissible
    }
    .modal-main-display {
        width: 100%;
        display: flex;
        margin-bottom: 2px;
        .info-box {
            width: 215px;
            height: 292px;
            background-color: #27648f;
            display: flex;
            justify-content: center;
        }
        .media-box {
            position: relative;
            width: 504px;
            height: 292px;
            margin-left: 3px;
            background-color: gray;
        }
        .media-box.fullWidthMedia {
            width: 100%;
            margin-left: 0px;
        }
        
        * {box-sizing:border-box}

        /* Slideshow container */
        .slideshow-container {
            max-width: 1000px;
            height: 100%;
            position: relative;
            margin: auto;
            overflow: hidden;
            .media-img {
                width: 100%;
                height: 100%;
                img {    
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .media-timeline {
                width: 100%;
                height: 100%;
                cursor: pointer;
                z-index: -3;
                img {    
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }

        /* Class used to hide the slides by default */
        .hideSlides {
            display: none;
        }
        .mySlides:not(.firstslide) {
            display: none;
        }
        /* Next & previous buttons */
        .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
        }

        /* Position the "next button" to the right */
        .next {
        right: 0;
        border-radius: 3px 0 0 3px;
        }

        /* On hover, add a black background color with a little bit see-through */
        .prev:hover, .next:hover {
        background-color: rgba(0,0,0,0.8);
        }

        /* Caption text */
        .text {
        color: #f2f2f2;
        font-size: 15px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
        }

        /* Number text (1/3 etc) */
        .numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
        }

        /* The dots/bullets/indicators */
        .dot {
        cursor: pointer;
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
        }

        .active, .dot:hover {
        background-color: #717171;
        }

        /* Fading animation */
        .fades {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 1.5s;
        animation-name: fade;
        animation-duration: 1.5s;
        }

        @-webkit-keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
        }

        @keyframes fade {
        from {opacity: .4}
        to {opacity: 1}
        }
    }
    @media only screen and (max-width: 767px) {
        .modal-main-display {
            .media-box {
                width: 100%;
                height: 220px;
                margin-left: 0;
                background-color: gray;
            }
        }
        .lower-info-box-event {
            display: flex;
        }
    }
</style>
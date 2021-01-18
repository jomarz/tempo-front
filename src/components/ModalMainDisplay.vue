<template>
    <div class="modal-main-display">
        <div class="info-box">
            <feat-info-event v-if="contentType==='event'" :featuredInfo="content" class="article-modal-info"/>
            <feat-info-article v-if="contentType==='article'" :featuredInfo="content"/>
        </div>
        <div class="media-box">
            <!-- Slideshow container -->
            <div class="slideshow-container">
                <template v-for="media in mediaFullList" :key="media.id">
                    <div v-if="media.media_type=='image'" class="mySlides fades media-img">
                        <img :src="media.url" style="width:100%">
                    </div>
                    <div v-else-if="media.media_type=='video'" class="mySlides fades media-video">
                        <iframe width="504" height="298" :src="media.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                </template>

            <!-- Next and previous buttons -->
            <a class="prev" @click="plusSlides(-1)">&#10094;</a>
            <a class="next" @click="plusSlides(1)">&#10095;</a>
            </div>
            <br>

            <!-- The dots/circles -->
            <!-- <div style="text-align:center">
                <span class="dot" @click="currentSlide(1)"></span>
                <span class="dot" @click="currentSlide(2)"></span>
                <span class="dot" @click="currentSlide(3)"></span>
            </div> -->
            <media-controls class="article-media-controls" @jump-to-type="jumpToMediaType" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import FeatInfoArticle from './FeatInfoArticle.vue'
import FeatInfoEvent from './FeatInfoEvent.vue'
import MediaControls from './MediaControls.vue'
import MediaAPI from '../classes/MediaAPI'

export default {
    components: { FeatInfoEvent, FeatInfoArticle, MediaControls },
    props: {
        contentType: {
            required: true,
            type: String
        },
        content: {
            required: true,
            type: Object
        }
    },
    setup(props) {
        var slideIndex = 1;
        console.log(props);
        var mediaFullList = ref([]);
        const mediaAPI = new MediaAPI();
        mediaAPI.getMedia(1, 1, (data) => {mediaFullList.value = data.data; console.log(mediaFullList.value)});
        return { slideIndex, mediaFullList }
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
            return this.mediaFullList.findIndex((element) => element.media_type == mediaType);
        },
        jumpToMediaType(mediaType) {
            const newIndex = this.getFirstOfType(mediaType);
            this.currentSlide(newIndex+1);
        }
    },
    mounted() {
        this.showSlides(this.slideIndex);
    }
}
</script>

<style lang="scss" scoped>
    .modal-main-display {
        width: 100%;
        display: flex;
        .info-box {
            width: 215px;
            height: 298px;
            background-color: #27648f;
            display: flex;
            justify-content: center;
        }
        .media-box {
            width: 504px;
            height: 298px;
            background-color: gray;
        }
        .article-media-controls{
            position: absolute;
            bottom: 5px;
            right: 5px;
            border: solid 1px white;
        }
        * {box-sizing:border-box}

        /* Slideshow container */
        .slideshow-container {
        max-width: 1000px;
        height: 100%;
        position: relative;
        margin: auto;
        overflow: hidden;
        }

        /* Hide the images by default */
        .mySlides {
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
</style>
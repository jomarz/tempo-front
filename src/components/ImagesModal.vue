<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="close-row">
                        <img src="..\assets\img\icons\ExitIcon.svg" @click="store.toggleImagesModal()" alt="">
                    </div>                  
                    <div class="slideshow-container" :class="hideImgSlides">
                        <template v-for="(media, index) in store.articleMedia.media" :key="media.mediaId">
                            <div v-if="media.mediaType=='imgUrl'" class="myImageSlides fades media-img" :class="{firstslide: index==0}">
                                <img :src="media.url" style="width:100%">
                            </div>

                        </template>

                        <!-- Next and previous buttons -->
                        <a class="prev" @click="plusSlides(-1)">&#10094;</a>
                        <a class="next" @click="plusSlides(1)">&#10095;</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import store from '../store/store.js';
export default {
    setup() {
        var imgIndex = 1;
        return { store, imgIndex };
    },
    methods: {
        // Next/previous controls
        plusSlides(n) {
            this.showSlides(this.imgIndex += n);
        },
        // Thumbnail image controls
        currentSlide(n) {
            this.showSlides(this.imgIndex = n);
        },
        showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("myImageSlides");
            //var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {this.imgIndex = 1}
            if (n < 1) {this.imgIndex = slides.length}
            for (i = 0; i < slides.length; i++) {console.log(i);
                slides[i].style.display = "none";
            }
            /* for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            } */
            slides[this.imgIndex-1].style.display = "block";
            //dots[this.imgIndex-1].className += " active";
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
    }

    .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    }

    .modal-container {
    width: 95%;
    max-width: 860px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px auto;
    padding: 0px 5px 16px;
    background-color: #fff;
    border-radius: 0px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    }
    .close-row {
        width: 100%;
        img {
            height: 13px;
            float: right;
            margin-top: 5px;
            margin-bottom: 3px;
            cursor: pointer;
        }
    }
            
        * {box-sizing:border-box}

        /* Slideshow container */
        .slideshow-container {
            width: 100%;
            padding: 0px 12px 3px;
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
            iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }

        /* Class used to hide the slides by default */
        .hideImgSlides {
            display: none;
        }
        .myImageSlides:not(.firstslide) {
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
        right: 13px;
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
</style>
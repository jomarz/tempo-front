<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="content-header"> 
                        <div class="close-content-modal" >
                            <img src="..\assets\img\icons\ExitIcon.svg" @click="$emit('toggle')" alt="">
                        </div>                   
                        <div v-if="store.articleData.isEvent == 1" class="modal-content-type">CONCIERTOS</div>
                        <div v-else class="modal-content-type">ARTÍCULOS</div>
                    </div>
                    <div class="title-row">
                        <h3>{{content.title}}</h3>
                        <div class="modal-content-subtitle">{{content.subtitle}}</div>
                    </div>
                    <modal-main-display :contentType="contentType" :content="content" class="sticky" />
                    <div class="text-sub" v-html="content.lead"></div>
                    <div class="main-article-content">
                        <template v-for="(paragraph, index) in content.contents" :key="paragraph.id">
                            <ad-box v-if="index==content.contents.length-1" :ad="articleAds[1]" class="ad-row" />
                            <p v-if="paragraph.contentType == 'p'" class="article-text" v-html="paragraph.html" ></p>
                            <h2 v-else-if="paragraph.contentType == 'h2'" class="article-text">{{paragraph.html}}</h2>
                            <h3 v-else-if="paragraph.contentType == 'h3'" class="article-text">{{paragraph.html}}</h3>
                        </template>
                    </div>
                    <ad-box class="ad-row" :ad="articleAds[2]" />
                    <related-articles :relatedArticles="relatedArticles" class="md-up" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { ref } from 'vue';
import store from '../store/store.js';
import PostContentAPI from '../classes/PostContentAPI';
import Lister from '../classes/Lister';
import ModalMainDisplay from './ModalMainDisplay';
import RelatedArticles from './RelatedArticles';
import AdBox from './AdBox.vue';

export default {
    setup() {
        var contentType = 'article';
        if(store.articleData.isEvent == 1)  contentType = 'event';
        var content = ref({
            id: 1,
            title: 'Concierto Inagural',
            name: 'Ian Bostridge',
            datetime: "2021-04-12 00:00:00",
            day: 30,
            month: 'DE JULIO, 2020',
            location: 'Teatro Mayor, Bogota',
            author: 'CARLOS DIAZ',
            authorTitle: 'Musicólogo',
            textSub: 'Et re quo vitem imus, es cum sam ipsapid et, conet mos abor repro blaboria sectatem id est, etur? Qui blani ipiendeliae veniendit aut atur, is cor apienit aut quatem aborrovit, eatur ati cum quos.',
            text: 'Natibus evellaut rempore, id qui to sit doluptatis ducias sit quodis sit esseces ad mintem quam desciatis molupta perupta tisita cone non con es molore pro deribus.Lessimi libusto coria pe dus landellam. Aquas sae volecatur autendit, tecti del molorum ariatur, solorpor sum explictibus et arum, tetur, quas sitat. Agniendenis erumeni tet hillaut faccumq uia teni sciendu cienis essit occus di tor aut landellam es ducienimusam volum et estibus  ceperit pe eos experro molupti onemporeicti nones utatus, occatissi beatibus iusdae re estia conserf errumquamus, imi,  mporuntio. Optis ex eaquo omnihil icturiatene et qui dendae eictas dolupta tiumet pro et quassin plicid mincipsam, volorun tibus, iusam fugit ommos ratium, iumquodit aditae si voluptatem est eaque volo voluptatur sapera autemped esequi omnimo  oluptat es doleces tiscium quiam rest, ut harumet, cum repreium ium late sandici lluptae rernatur sequidem. Harum et res  est omnimagnis reperum, quibus vendit et aut et labo. Ut eumque omnieni temolupta corumquo ventem que natiam quo delitiunt. Ga. Nam adigend enist, si blam repe nossequodi verspiet ium ipisquistium a veria quodi deris unt quiant am utem quo volorem ute voloreh endandi cimagni . Cum quia sum amet faccaecte idipsant quos untibusandae et exeriatet arum, quam, a cum esci  ccus aut laborae sequamus vit peri dolupti untium evelitio. Harciiscia volupta turesti atiaept atius, cum id et occum ad  tat placcuption perionseque cus aut volorition reptatemqui quam ius, se recus et, ipsum fugitem. Nam in ped quiaepro cor unt.',
            views: 20,
            likes: 18,
            commentCount: 103,
            contents : [
                {
                    id: "",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer malesuada nunc vel risus commodo. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Vitae sapien pellentesque habitant morbi tristique senectus et. Fermentum posuere urna nec tincidunt praesent semper. Dignissim enim sit amet venenatis urna cursus eget nunc. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Interdum posuere lorem ipsum dolor.",
                    mediaId: "1",
                    hasImage: "false",
                    imgUrl: "",
                    isQuote: "",

                },
                {
                    id: "",
                    text: "Mauris a diam maecenas sed. Sapien eget mi proin sed libero enim sed faucibus. Adipiscing at in tellus integer feugiat scelerisque. Tristique senectus et netus et malesuada. Pretium nibh ipsum consequat nisl vel pretium. Placerat vestibulum lectus mauris ultrices eros in. Commodo ullamcorper a lacus vestibulum. Varius quam quisque id diam. Netus et malesuada fames ac turpis. Sed risus ultricies tristique nulla aliquet. Iaculis at erat pellentesque adipiscing. Convallis a cras semper auctor neque. Turpis egestas maecenas pharetra convallis posuere. Ornare lectus sit amet est placerat in egestas erat.",
                    mediaId: "2",
                    hasImage: "false",
                    imgUrl: "",
                    isQuote: "false",

                },
                {
                    id: "",
                    text: "Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Velit egestas dui id ornare arcu odio ut sem nulla. Et odio pellentesque diam volutpat commodo sed. Proin sagittis nisl rhoncus mattis rhoncus urna. Massa tempor nec feugiat nisl pretium fusce. Amet porttitor eget dolor morbi non. Eget aliquet nibh praesent tristique magna sit amet purus gravida. At lectus urna duis convallis convallis. Interdum varius sit amet mattis vulputate enim nulla. Faucibus nisl tincidunt eget nullam non nisi est.",
                    mediaId: "3",
                    hasImage: "false",
                    imgUrl: "",
                    isQuote: "false",

                },
                {
                    id: "",
                    text: "Porttitor massa id neque aliquam vestibulum morbi. Quis varius quam quisque id diam vel quam elementum. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Mauris cursus mattis molestie a iaculis. Quis risus sed vulputate odio ut enim blandit. Viverra nam libero justo laoreet. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Aliquam etiam erat velit scelerisque. Pellentesque adipiscing commodo elit at. Ultricies mi eget mauris pharetra et.",
                    mediaId: "4",
                    hasImage: "false",
                    imgUrl: "",
                    isQuote: "false",

                },
                {
                    id: "",
                    text: "Sit amet risus nullam eget felis eget. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Metus aliquam eleifend mi in nulla posuere sollicitudin. Morbi enim nunc faucibus a. Porttitor rhoncus dolor purus non enim praesent. At elementum eu facilisis sed odio morbi. Auctor eu augue ut lectus arcu. Nibh nisl condimentum id venenatis. Sodales ut etiam sit amet nisl. Cursus sit amet dictum sit amet justo donec enim. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Diam sollicitudin tempor id eu nisl nunc.",
                    mediaId: "5",
                    hasImage: "false",
                    imgUrl: "",
                    isQuote: "false",

                },
            ]
        });
        const relatedArticles = [
                {
                    id: '1',
                    title: 'Igor Levit',
                    subtitle: 'Imodipic iissimus',
                    imgUrl: 'https://picsum.photos/seed/aab1/300/300',
                    postType: 'event'
                },
                {
                    id: '2',
                    title: 'Uptatem invente',
                    subtitle: 'comnihilita soluptas',
                    imgUrl: 'https://picsum.photos/seed/aab1/300/300',
                    postType: 'event'
                },
                {
                    id: '3',
                    title: 'Nicolas Altstaedt',
                    subtitle: 'Eaque nus eos praesci',
                    imgUrl: 'https://picsum.photos/seed/aab1/300/300',
                    postType: 'event'
                },
                {
                    id: '4',
                    title: 'Ad millabo reperro',
                    subtitle: 'Versped que voloreprem',
                    imgUrl: 'https://picsum.photos/seed/aab1/300/300',
                    postType: 'event'
                },
            ];
            const articleAds = [
                { ad_id: '1',
                    image_url: 'https://picsum.photos/id/1002/1200/200',
                    link_url: '',
                    placing: '1',
                    },
                { ad_id: '2',
                    image_url: 'https://picsum.photos/id/1002/1200/200',
                    link_url: '',
                    placing: '2',
                    },
                { ad_id: '3',
                    image_url: 'https://picsum.photos/id/1002/1200/200',
                    link_url: '',
                    placing: '3',
                    },
            ];
        const postContentAPI = new PostContentAPI();
        postContentAPI.getContent(store.articleData.id, store.articleData.permalink, store.articleData.isEvent, (data) => {
            content.value = data.data;console.log(store.articleData.isEvent);
            if(store.articleData.isEvent == 1)  content.value = Lister.assignDateFields([content.value])[0];
            console.log(content.value);
            });
        
        return { store, contentType, content, relatedArticles, articleAds };
    },
    components: { ModalMainDisplay, RelatedArticles, AdBox }
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
    width: 764px;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    //align-items: center;
    margin: 0px auto;
    padding: 7px 20px 20px;
    background-color: #fff;
    border-radius: 0px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    }
    .sticky {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: -5px;
    }
    .modal-content-type {
        //float: left;
        font-size: 0.85rem !important;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        clear: both;
    }
    .close-content-modal {
        float: right;
        display: block;
        img {
            height: 15px;
            float: right;
            margin-top: 10px;
            cursor: pointer;
        }
    }
    .content-header {
        width: 100%;
        border-bottom: 1px solid #d1d3d4;
        padding-bottom: 5px;
    }
    .title-row {
        padding-top: 15px;
        padding-bottom: 15px;
        h3 {
            margin-bottom: 5px;
        }
    }
    .modal-content-subtitle {
        font-size: 0.95rem !important;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    .text-sub{
        font-size: 0.75rem !important;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        padding-top: 10px;
    }
    .main-article-content {
        align-self: center;
        width: 450px;
        padding-top: 20px;
        p {
            font-size: 0.85rem !important;
        }
        h1 ,h2 {
            margin-top: 10px;
            margin-bottom: 25px;
        }
        h3 {
            margin-bottom: 20px;
        }
        .ad-row {
            margin-bottom: 16px;
        }
    }
    @media only screen and (max-width: 767px) {
        .modal-container {
            width: 100%;
        }
        .main-article-content {
            width: 95%;
        }
    }
</style>
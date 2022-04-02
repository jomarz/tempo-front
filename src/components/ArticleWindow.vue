<template>
    <transition name="modal">
        <div class="modal-mask article-modal" @click="checkClickOutsideArticle($event)">
            <div class="modal-wrapper" ref="modalWrapper" id="modal-wrapper">
                <div v-if="showContent" class="modal-container">
                    <div class="content-header"> 
                        <div class="close-content-modal" >
                            <img src="..\assets\img\icons\ExitIcon.svg" @click="$emit('close-article')" alt="">
                        </div>                   
                        <div v-if="store.articleData.isEvent == 1" class="modal-content-type">CONCIERTOS</div>
                        <div v-else class="modal-content-type">ARTÍCULOS</div>
                    </div>
                    <div class="title-row">
                        <h3 v-html="content.title"></h3>
                        <div class="modal-content-subtitle" v-html="content.subtitle" ></div>
                    </div>
                    <modal-main-display :contentId="contentId" :isEvent="store.articleData.isEvent" :contentType="contentType" :content="content" class="" :featuredImg="content.imgUrl" />
                    <div class="text-sub" v-html="content.lead"></div>
                    <div class="main-article-content">
                        <div class="author-info">
                            <div class="author-pic">
                                <img v-if="content.authorImgUrl == ''" src="../assets/img/icons/author_icon.png" alt="">
                                <img v-else :src="content.authorImgUrl" alt="">
                            </div>
                            <div class="author-data">
                                <div class="author-name">Por: {{content.author}}</div>
                                <div class="author-job-title">{{content.authorJobTitle}}</div>
                            </div>
                        </div>
                        <template v-for="(element, index) in content.contents" :key="element.id" :class="{innerAdContainer: element.contentType=='innerAds'}">
                            <ad-box v-if="index==content.contents.length-1 && articleAdsList['ARTICLE_BODY_BOTTOM_FULL_BANNER']" :ad="articleAdsList['ARTICLE_BODY_BOTTOM_FULL_BANNER']" class="ad-row" />
                            <div v-if="element.contentType == 'innerAds'" class="article-body-ad" >
                                <div v-if="articleAdsList['ARTICLE_BODY_LEFT_FIRST_RECTANGLE']" class="article-inner-ad">
                                    <a :href="articleAdsList['ARTICLE_BODY_LEFT_FIRST_RECTANGLE'].linkUrl"><img :src="articleAdsList['ARTICLE_BODY_LEFT_FIRST_RECTANGLE'].imgUrl" alt="" class="ad-img"></a>
                                </div>
                                <div v-if="articleAdsList['ARTICLE_BODY_LEFT_SECOND_RECTANGLE']" class="article-inner-ad">
                                    <a :href="articleAdsList['ARTICLE_BODY_LEFT_SECOND_RECTANGLE'].linkUrl"><img :src="articleAdsList['ARTICLE_BODY_LEFT_SECOND_RECTANGLE'].imgUrl" alt="" class="ad-img"></a>
                                </div>
                                <!-- <div v-for="(innerAd, index) in element.ads" class="article-inner-ad" :key="index">
                                    <img :src="innerAd.imgUrl" alt="">
                                    <div class="inner-ad-title" v-html="innerAd.title"></div>
                                    <div class="inner-ad-subtitle" v-html="innerAd.subtitle"></div>
                                </div> -->
                            </div>
                            <p v-else-if="element.contentType == 'p'" class="article-text" v-html="element.html" ></p>
                            <h2 v-else-if="element.contentType == 'h2'" class="article-text" v-html="element.html"></h2>
                            <h3 v-else-if="element.contentType == 'h3'" class="article-text" v-html="element.html"></h3>
                            <div v-else-if="element.contentType == 'highlightP'" class="article-text-highlight" v-html="element.html"></div>
                            <ul v-else-if="element.contentType == 'ul'" class="article-text">
                                <li v-for="(item, index) in JSON.parse(element.html)" :key="index" v-html="item" ></li>
                            </ul>
                            <ol v-else-if="element.contentType == 'ol'" class="article-text">
                                <li v-for="(item, index) in JSON.parse(element.html)" :key="index" v-html="item" ></li>
                            </ol>
                            <table v-else-if="element.contentType == 'table'" class="article-text-table">
                                <tr v-for="(row, index) in element.html" :key="index">
                                    <td v-for="(tableCell, index) in row" :key="index" v-html="tableCell"></td>
                                </tr>
                            </table>
                            <hr v-else-if="element.contentType == 'separator'" class="article-text-separator" />
                        </template>
                        <article-icons @toggle-article-comments="toggleArticleComments()" :views="content.views" :likes="likesCount" :commentCount="commentCount" :postIsLiked="postIsLiked" @like-post="likePost()" />
                        <article-comments v-if="showComments" :comments="comments" @toggle-article-comments="toggleArticleComments()" @update-comments="updateComments()" />
                        <comment-respond class="main-comment-input" @update-comments="updateComments()" />
                    </div>
                    <ad-box v-if="articleAdsList['ARTICLE_CONTENT_BOTTOM_FULL_BANNER']" class="ad-row ad-article-full" :ad="articleAdsList['ARTICLE_CONTENT_BOTTOM_FULL_BANNER']" />
                    <related-articles :relatedArticles="relatedArticles" class="md-up" />
                    <article-cta />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { ref } from 'vue';
import store from '../store/store.js';
import AdsAPI from '../classes/AdsAPI';
import CommentsAPI from '../classes/CommentsAPI';
import RelatedArticlesAPI from '../classes/RelatedArticlesAPI';
import AdsList from '../classes/AdsList';
import PostContentAPI from '../classes/PostContentAPI';
import Lister from '../classes/Lister';
import LikePostAPI from '../classes/LikePostAPI';
import ModalMainDisplay from './ModalMainDisplay';
import RelatedArticles from './RelatedArticles';
import AdBox from './AdBox.vue';
import ArticleCta from './ArticleCta.vue';
import ArticleComments from './ArticleComments.vue';
import CommentRespond from './CommentRespond.vue';
import ArticleIcons from './ArticleIcons.vue';

export default {
    setup() {
        var contentType = 'article';
        var showComments = ref(false);
        var postIsLiked = ref(false);
        if(store.articleData.isEvent == 1)  contentType = 'event';
        var innerAds = {
            contentType: 'innerAds',
            ads: [
                {
                    imgUrl: 'https://tempo.wittrees.com/media/imgTest/11215670141163291475.png',
                    title: 'Nicolas Altstaedt',
                    subtitle: 'Imodipic iissimus'},
                {
                    imgUrl: 'https://tempo.wittrees.com/media/imgTest/sociosalmayor-banners.png',
                    title: 'Nicolas Altstaedt',
                    subtitle: 'Imodipic iissimus'}
            ]
        };
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

                }
            ]
        });
        const relatedArticles = ref([
                {
                    id: '1',
                    article_title: 'Igor Levit',
                    subtitle: 'Imodipic iissimus',
                    imgUrl: 'https://picsum.photos/seed/aab1/300/300',
                    postType: 'event'
                },
                {
                    id: '2',
                    article_title: 'Uptatem invente',
                    subtitle: 'comnihilita soluptas',
                    imgUrl: 'https://picsum.photos/seed/aab1/300/300',
                    postType: 'event'
                },
                {
                    id: '3',
                    article_title: 'Nicolas Altstaedt',
                    subtitle: 'Eaque nus eos praesci',
                    imgUrl: 'https://picsum.photos/seed/aab1/300/300',
                    postType: 'event'
                },
                {
                    id: '4',
                    article_title: 'Ad millabo reperro',
                    subtitle: 'Versped que voloreprem',
                    imgUrl: 'https://picsum.photos/seed/aab1/300/300',
                    postType: 'event'
                },
            ]);
        const comments = ref([
            {
                "comment_id": 12,
                "comment_parent_id": null,
                "comment_author_name": 'Bob',
                "comment_text": "Dsrrr hghfj yuu",
                "comment_datetime": "2021-01-20 17:58:15",
                "comment_status": "published",
                "comment_likes": 0,
                "comment_dislikes": 0,
                "hasChildren": null
            },
            {
                "comment_id": 13,
                "comment_parent_id": null,
                "comment_author_name": 'Alica',
                "comment_text": "Dsdsd ddd",
                "comment_datetime": "2021-01-20 17:58:15",
                "comment_status": "published",
                "comment_likes": 0,
                "comment_dislikes": 0,
                "hasChildren": null
            },
        ]);
         
        var showContent = ref(false);
        const postContentAPI = new PostContentAPI();
        const commentsAPI = new CommentsAPI();
        const relatedAPI = new RelatedArticlesAPI();
        const likePostAPI = new LikePostAPI();
        /* const getPostComments = function() 
        {
            // Get post comments from API
            commentsAPI.getCommentsFromPermalink(store.articleData.permalink, store.articleData.isEvent, (response) => {
                if(response.data != null) {
                    return response.data;
                    comments.value = response.data;
                    commentCount.value = countComments(comments.value);
                } else return [];
            });
        } */
        const countComments = function(comments) 
        {
            var count = 0;
            comments.forEach(comment => {
                count++;
                if(comment.hasChildren) {
                    count += countComments(comment.replies);
                }
            });
            return count;
        }
        const getIndex2ndParagraph = function(contents)
        {
            var paragraphCount = 0;
            contents.forEach((element, index) => {
                if(element.contentType == 'p') {
                    paragraphCount ++;
                    if(paragraphCount == 2) return index;
                }
            });
            return 1;
        }
        var commentCount = ref(0);
        var likesCount = ref(0);
        postContentAPI.getContent(store.articleData.id, store.articleData.permalink, store.articleData.isEvent, (data) => {
            if(data.data != null) {
                let tempContent = data.data;
                tempContent.contents.forEach((element, index) => {
                    if(element.contentType === 'table') {
                        tempContent.contents[index].html = JSON.parse(element.html);
                    }
                });
                let index2ndP = getIndex2ndParagraph(tempContent.contents);
                tempContent.contents.splice(index2ndP, 0, innerAds);
                content.value = tempContent; console.log(tempContent);
                // Create reactive likes-count variable
                likesCount.value = content.value.likes;
                // Assign month name
                if(store.articleData.isEvent == 1)  content.value = Lister.assignDateFields([content.value])[0]; 
                // Save post id in case we didn't have it
                if(store.articleData.id == 0 || store.articleData.id === undefined)   store.setArticleId(content.value.postId);

                // Get post comments from API
                commentsAPI.getCommentsFromPermalink(store.articleData.permalink, store.articleData.isEvent, (response) => {
                    comments.value = response.data;
                    commentCount.value = countComments(comments.value);
                });
                relatedAPI.getRelatedPosts(content.value.tags, (response) => {
                    relatedArticles.value = response.data;
                });
                showContent.value = true;
            } else {
                this.$router.push('/');
            }
            });
        
        const adsAPI = new AdsAPI();
        const adPositions = [
                "ARTICLE_BODY_BOTTOM_FULL_BANNER",
                "ARTICLE_BODY_LEFT_FIRST_RECTANGLE",
                "ARTICLE_BODY_LEFT_SECOND_RECTANGLE",
                "ARTICLE_CONTENT_BOTTOM_FULL_BANNER",
        ];
        const articleAds = new AdsList(adPositions);
        var articleAdsList = ref({
        ARTICLE_BODY_BOTTOM_FULL_BANNER: false,
        ARTICLE_BODY_LEFT_FIRST_RECTANGLE: false,
        ARTICLE_BODY_LEFT_SECOND_RECTANGLE: false,
        ARTICLE_CONTENT_BOTTOM_FULL_BANNER: false
        });
        adsAPI.getAds('article', (data)=> {
            articleAdsList.value = articleAds.buildAdList(data.data);
        });
        return { store, contentType, content, relatedArticles, articleAds, articleAdsList, showContent, showComments, comments, commentCount, likePostAPI, postIsLiked, likesCount, countComments, commentsAPI };
    },
    components: { ModalMainDisplay, RelatedArticles, AdBox, ArticleCta, ArticleComments, ArticleIcons, CommentRespond  },
    methods: {
        toggleArticleComments() {
            this.showComments = !this.showComments;
        },
        likePost() {
            this.likePostAPI.likePost(this.store.articleData.id, this.store.articleData.isEvent, () => {
                this.postIsLiked = true;
                this.likesCount ++;
            });
        },
        updateComments() {
            this.commentsAPI.getCommentsFromPermalink(store.articleData.permalink, store.articleData.isEvent, (response) => {
                this.comments = response.data;
                this.commentCount = this.countComments(this.comments);
            });
        },
        checkClickOutsideArticle(e) {
            if(!e.target.closest('#modal-wrapper') && !e.target.classList.contains('prevent-article-close')) {
                this.$emit('close-article');
            }
        }
    },
    computed: {
        index2ndParagraph()
        {
            var paragraphCount = 0;
            this.content.contents.forEach((element, index) => {
                if(element.contentType == 'p') {
                    paragraphCount ++;
                    if(paragraphCount == 2) return index;
                }
            });
            return 1;
        }
    }
}
</script>

<style lang="scss" >
    .modal-mask.article-modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    transition: opacity 0.3s ease;
    }
    .article-modal {
        .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
        }

        .modal-container {
            width: 764px;
            height: 100%;
            overflow: auto;
            /* display: flex;
            flex-direction: column; */
            //align-items: center;
            margin: 0px auto;
            padding: 7px 20px 0px;
            background-color: #fff;
            border-radius: 0px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
            transition: all 0.3s ease;
            .article-cta {
                margin-left: -20px;
                margin-right: -20px;
            }
            .main-article-content {
                .ad-row {
                    height: 90px;
                }
                .article-body-ad {
                    float: left;
                    display: flex;
                    flex-direction: column;
                }
                .article-body-ad img {
                    width: 135px; 
                    height: 90px; 
                    margin: 5px 18px 8px 0;
                    object-fit: cover;
                }
                .innerAdContainer {
                    float: left;
                }
                .article-inner-ad {
                    margin: 0 0 15px;
                }
                .inner-ad-title {
                    font-family: 'Playfair display';
                    font-size: 0.8rem;
                }
                .inner-ad-subtitle {
                    font-family: 'Roboto', sans-serif;
                    font-size: 0.7rem;
                }
            }
            .ad-article-full {
                width: calc(100% + 20px + 20px);
                margin-left: -20px;
                margin-right: -20px;
                height: 150px;
                overflow: visible;
                padding: 0;
            }
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
            line-height: 0.95rem;
            font-size: 0.75rem !important;
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            padding-top: 10px;
        }
        .main-article-content {
            align-self: center;
            width: 450px;
            padding-top: 20px;
            //display: flex;
            //flex-direction: column;
            margin-left: auto;
            margin-right: auto;

            p {    
                line-height: 1.18rem;
                font-size: 0.75rem !important;
                text-align: left;
            }
            h1 ,h2 {
                margin-top: 10px;
                margin-bottom: 25px;
            }
            h3 {
                margin-bottom: 20px;
            }
            b, strong {
                font-weight: 700;
            }
            .article-text-highlight {
                font-family: 'Playfair display';
                font-size: 0.9rem !important;
                line-height: 1.2rem;
                margin: 0 1.5rem 1rem;
                text-align: center;
            }
            .article-text-table {
                margin: 0 auto 1rem;
                td:not(:first-of-type) {
                    padding-left: 25px;
                }
            }
            .article-text-separator {
                clear: both;
                margin: 0 0 1rem;
            }
            ul li, ol li {
                font-size: 0.85rem !important;
                font-family: 'Roboto', sans-serif;
                font-weight: 300;
            }
            .ad-row {
                margin-bottom: 16px;
            }
            .author-info {
                display: flex;
                margin-bottom: 20px;
            }
            .author-pic img {
                width: 74px;
                height: 74px;
            }
            .author-data {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                line-height: 1rem;
                margin-left: 15px;
                .author-name {
                    font-size: 0.95rem !important;
                    font-family: 'Playfair display';
                    font-weight: 400;
                }
                .author-job-title {
                    font-size: 0.85rem !important;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 400;
                }
            }
            .main-comment-input {
                margin: 0 0 60px;
            }
        }
    }
    @media only screen and (max-width: 767px) {
        .article-modal {
            .modal-container {
                width: 100%;
            }
            .main-article-content {
                width: 95%;
                .ad-row, .ad-box.ad-row {
                    padding: 0px;
                }
            }
        }
    }
</style>
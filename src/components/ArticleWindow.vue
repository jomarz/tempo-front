<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="content-header"> 
                        <button class="close-content-modal" @click="$emit('toggle')">
                            CERRAR
                        </button>                   
                        <div class="modal-content-type">CONCIERTOS</div>
                    </div>
                    <div class="title-row">
                        <h3>La Integral de los Cuartetos de Beethoven</h3>
                        <div class="modal-content-subtitle">El Cuarteto Casals: Veinte Años Para Escalar la Cima de los Cuartetos de Beethoven</div>
                    </div>
                    <modal-main-display :contentType="contentType" :content="content" class="sticky" />
                    <div class="text-sub">{{content.textSub}}</div>
                    <div class="main-article-content">
                        <p class="article-text">{{content.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import store from '../store/store.js';
import ModalMainDisplay from './ModalMainDisplay';

export default {
    setup() {
        const contentType = 'event';
        const content = {
            title: 'Concierto Inagural',
            name: 'Ian Bostridge',
            day: 30,
            month: 'DE JULIO, 2020',
            location: 'Teatro Mayor, Bogota',
            author: 'CARLOS DIAZ',
            authorTitle: 'Musicólogo',
            textSub: 'Et re quo vitem imus, es cum sam ipsapid et, conet mos abor repro blaboria sectatem id est, etur? Qui blani ipiendeliae veniendit aut atur, is cor apienit aut quatem aborrovit, eatur ati cum quos.',
            text: 'Natibus evellaut rempore, id qui to sit doluptatis ducias sit quodis sit esseces ad mintem quam desciatis molupta perupta tisita cone non con es molore pro deribus.Lessimi libusto coria pe dus landellam. Aquas sae volecatur autendit, tecti del molorum ariatur, solorpor sum explictibus et arum, tetur, quas sitat. Agniendenis erumeni tet hillaut faccumq uia teni sciendu cienis essit occus di tor aut landellam es ducienimusam volum et estibus  ceperit pe eos experro molupti onemporeicti nones utatus, occatissi beatibus iusdae re estia conserf errumquamus, imi,  mporuntio. Optis ex eaquo omnihil icturiatene et qui dendae eictas dolupta tiumet pro et quassin plicid mincipsam, volorun tibus, iusam fugit ommos ratium, iumquodit aditae si voluptatem est eaque volo voluptatur sapera autemped esequi omnimo  oluptat es doleces tiscium quiam rest, ut harumet, cum repreium ium late sandici lluptae rernatur sequidem. Harum et res  est omnimagnis reperum, quibus vendit et aut et labo. Ut eumque omnieni temolupta corumquo ventem que natiam quo delitiunt. Ga. Nam adigend enist, si blam repe nossequodi verspiet ium ipisquistium a veria quodi deris unt quiant am utem quo volorem ute voloreh endandi cimagni . Cum quia sum amet faccaecte idipsant quos untibusandae et exeriatet arum, quam, a cum esci  ccus aut laborae sequamus vit peri dolupti untium evelitio. Harciiscia volupta turesti atiaept atius, cum id et occum ad  tat placcuption perionseque cus aut volorition reptatemqui quam ius, se recus et, ipsum fugitem. Nam in ped quiaepro cor unt.',
            views: 20,
            likes: 18,
            commentCount: 103
        };
        return { store, contentType, content };
    },
    components: {
        ModalMainDisplay
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
    width: 764px;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    }
    .content-header {
        width: 100%;
        border-bottom: 1px solid #d1d3d4;
        padding-bottom: 5px;
    }
    .title-row {
        padding-top: 30px;
        padding-bottom: 15px;
    }
    .modal-content-subtitle {
        font-size: 0.95rem !important;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    .text-sub{
        font-size: 0.85rem !important;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }
    .main-article-content {
        width: 450px;
    }
</style>
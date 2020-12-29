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
                    <modal-main-display />
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
        return { store };
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
  margin: 0px auto;
  padding: 20px 20px;
  background-color: #fff;
  border-radius: 0px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
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

</style>
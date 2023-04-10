<template>
  <q-page class="">
    <div class="component1" :style="backgroundImage">
      <div class="q-pt-xl q-pb-xl relative-position title">
        <img :src="'src/images/' + title" alt="">
        <div class="absolute-right row content-center top-right-btns">
          <q-icon name="fas fa-circle-question" size="25px" class="q-pa-sm q-mr-xl bg-secondary text-white"/>
          <q-icon name="CZ" size="15px" class="bg-secondary"/>
          <q-icon name="EN" size="15px" class="bg-secondary"/>
        </div>
      </div>
      <div class="q-py-md">
        <img :src="'src/images/' + message" alt="">
      </div>
      <div class="text">
        <p class="section">Dáme vám vědět, jakmile vypíšeme další výzvu</p>
        <p class="text-secondary">Jsme rádi, že s námi chcete jezdit na kole, koloběžce, chodit či běhat (nejen) do prace!</p>
        <p class="text-secondary">Další výzvu připravujeme.</p>
        <p class="text-secondary">Zatím se můžete podivat na novinky v oblasti městské cyklistiky a udržitelné dopravy</p>
      </div>

      <div class="component2">

      </div>

      <q-banner class="bg-blue-grey-2 relative-position">
        <p class="section q-ma-none">Sledujte nás na sociálních sítích</p>
        <div class="row absolute-right q-my-auto content-center">
            <q-icon clickable tag="a" target="_blank" href="" name="fa-brands fa-facebook" size="20px" class="q-pa-sm q-mx-sm text-black"/>
            <q-icon clickable tag="a" target="_blank" href="" name="fa-brands fa-instagram" size="20px" class="q-pa-sm q-mx-sm text-black"/>
            <q-icon clickable tag="a" target="_blank" href="" name="fa-brands fa-twitter" size="20px" class="q-pa-sm q-mx-sm text-black"/>
            <q-icon clickable tag="a" target="_blank" href="" name="fa-brands fa-youtube" size="20px" class="q-pa-sm q-mx-sm text-black"/>

        </div>
      </q-banner>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import conf from 'src/myconfiguration.json';
import { setCssVar } from 'quasar';

setCssVar('primary', conf.primaryColor)
setCssVar('secondary', conf.secondaryColor)

export default defineComponent({
  name: 'IndexPage',

  data() {
    return {
      backgroundImage: 'background-image: url("src/images/' + conf.backgroundImage + '")',
      title: conf.titleImage,
      message: conf.messageImage,
    }
  }
});




</script>

<style lang="scss">

  div.component1{
    background: no-repeat right;
  }

  div.component1 > div{
    max-width: 1200px;
    margin: auto;
  }

  .section{
    font-size: 1.5rem;
    font-weight: 600;
  }

  div.text p{
    max-width: 25%;
  }

  .q-icon{
    border-radius: 50%;
  }

  div.top-right-btns .q-icon:not(:first-child){
    font-weight: 600;
    color: white;
    padding: 13px;
  }

  div.top-right-btns .q-icon:nth-child(2){
    margin-right: -5px;
  }

  .q-banner .q-icon{
    border: 2px solid black;
    text-decoration: none;
  }

</style>

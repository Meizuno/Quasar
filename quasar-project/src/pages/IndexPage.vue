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
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          ref="carousel"
          infinite
          style="background: transparent"
        >
          <q-carousel-slide :name="1" class="column no-wrap q-pb-lg">
            <div class="row fit no-wrap">
              <div class="col-3 full-height slide-item" style="padding-right: 10px; height: 400px">
                <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
                <div class="bg-white">
                  <p style="font-weight: bold;">Titul Cykloskokan Do práce na kole 2022 získano Uherské Hradiště. Otrokovice vstupuji do Sině slávy</p>
                  <p class="text-grey-6">27. záři 2022</p>
                </div>
              </div>
              <div class="col-3 full-height slide-item" style="padding: 0 10px; height: 400px">
                <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
                <div class="bg-white">
                  <p style="font-weight: bold;">Titul Cykloskokan Do práce na kole 2022 získano Uherské Hradiště. Otrokovice vstupuji do Sině slávy</p>
                  <p class="text-grey-6">27. záři 2022</p>
                </div>
              </div><div class="col-3 full-height slide-item" style="padding: 0 10px; height: 400px">
              <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
              <div class="bg-white">
                <p style="font-weight: bold;">V rámci Evropského týdne mobility odstartoval už 6. ročník Zářijové výzvy Do práce na kole</p>
                <p class="text-grey-6">14. záři 2022</p>
              </div>
              </div><div class="col-3 full-height slide-item" style="padding-left: 10px; height: 400px">
                <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
                <div class="bg-white">
                  <p style="font-weight: bold;">V rámci Evropského týdne mobility odstartoval už 6. ročník Zářijové výzvy Do práce na kole</p>
                  <p class="text-grey-6">14. záři 2022</p>
                </div>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap q-pb-lg">
            <div class="row fit no-wrap">
              <div class="col-3 full-height slide-item" style="padding-right: 10px; height: 400px">
                <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
                <div class="bg-white">
                  <p style="font-weight: bold;">Titul Cykloskokan Do práce na kole 2022 získano Uherské Hradiště. Otrokovice vstupuji do Sině slávy</p>
                  <p class="text-grey-6">27. záři 2022</p>
                </div>
              </div>
              <div class="col-3 full-height slide-item" style="padding: 0 10px; height: 400px">
                <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
                <div class="bg-white">
                  <p style="font-weight: bold;">Titul Cykloskokan Do práce na kole 2022 získano Uherské Hradiště. Otrokovice vstupuji do Sině slávy</p>
                  <p class="text-grey-6">27. záři 2022</p>
                </div>
              </div><div class="col-3 full-height slide-item" style="padding: 0 10px; height: 400px">
              <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
              <div class="bg-white">
                <p style="font-weight: bold;">V rámci Evropského týdne mobility odstartoval už 6. ročník Zářijové výzvy Do práce na kole</p>
                <p class="text-grey-6">14. záři 2022</p>
              </div>
            </div><div class="col-3 full-height slide-item" style="padding-left: 10px; height: 400px">
              <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
              <div class="bg-white">
                <p style="font-weight: bold;">V rámci Evropského týdne mobility odstartoval už 6. ročník Zářijové výzvy Do práce na kole</p>
                <p class="text-grey-6">14. záři 2022</p>
              </div>
            </div>
            </div>
          </q-carousel-slide>

          <template v-slot:control>
            <q-carousel-control class="q-gutter-md">
              <q-btn
                push dense color="black" text-color="white" label="Navštívit blog" style="left: -200%" class="q-pa-sm"
              />
              <q-btn
                push round dense color="white" text-color="black" icon="fa fa-arrow-left"
                @click="$refs.carousel.previous()"
              />
              <q-btn
                push round dense color="white" text-color="black" icon="fa fa-arrow-right"
                @click="$refs.carousel.next()"
              />
            </q-carousel-control>
          </template>

        </q-carousel>
      </div>

      <q-banner class="bg-blue-grey-2 relative-position q-my-lg">
        <p class="section q-ma-none q-pa-md">Sledujte nás na sociálních sítích</p>
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
import { defineComponent, ref } from 'vue';
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
  },

  setup () {
    return {
      slide: ref(1),
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
    margin-right: auto;
    margin-left: auto;
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

  .slide-item div:first-child{
    border-radius: 5px 5px 0 0;
  }

  .slide-item div:last-child{
    border-radius: 0 0 15px 15px;
    border-style: none solid solid solid;
    border-color: $grey-3;
    border-width: 2px;
    padding: 5px;
  }

</style>

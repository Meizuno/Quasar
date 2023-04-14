<template>
  <q-page class="">
    <div class="component1 q-mx-md" :style="backgroundImage">
      <div class="q-pt-xl q-pb-xl relative-position title">
        <img :src="'src/images/' + title" alt="">
        <div class="absolute-right row content-center top-right-btns q-mr-md">
          <q-btn push round dense color="secondary" text-color="white" size="18px" icon="fas fa-circle-question" class="q-mr-xl"/>
          <q-btn push round dense :color="$i18n.locale == 'cs'    ? 'black' : 'secondary'"    text-color="white" size="18px" label="CZ" @click="csLang()"/>
          <q-btn push round dense :color="$i18n.locale == 'en-US' ? 'black' : 'secondary'" text-color="white" size="18px" label="EN" @click="enLang()"/>
        </div>
      </div>
      <div class="q-py-md">
        <img :src="'src/images/' + message" alt="">
      </div>
      <div class="text">
        <p class="section">{{ $t('text1') }}</p>
        <p class="text-secondary">{{ $t('text2') }}</p>
        <p class="text-secondary">{{ $t('text3') }}</p>
        <p class="text-secondary">{{ $t('text4') }}</p>
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
                  <p style="font-weight: bold;">{{ $t('text_carousel_item1') }}</p>
                  <p class="text-grey-6">{{ $t('date_carousel_item1') }}</p>
                </div>
              </div>
              <div class="col-3 full-height slide-item" style="padding: 0 10px; height: 400px">
                <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
                <div class="bg-white">
                  <p style="font-weight: bold;">{{ $t('text_carousel_item1') }}</p>
                  <p class="text-grey-6">{{ $t('date_carousel_item1') }}</p>
                </div>
              </div><div class="col-3 full-height slide-item" style="padding: 0 10px; height: 400px">
              <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
              <div class="bg-white">
                <p style="font-weight: bold;">{{ $t('text_carousel_item2') }}</p>
                <p class="text-grey-6">{{ $t('date_carousel_item2') }}</p>
              </div>
              </div><div class="col-3 full-height slide-item" style="padding-left: 10px; height: 400px">
                <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
                <div class="bg-white">
                  <p style="font-weight: bold;">{{ $t('text_carousel_item2') }}</p>
                  <p class="text-grey-6">{{ $t('date_carousel_item2') }}</p>
                </div>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap q-pb-lg">
            <div class="row fit no-wrap">
              <div class="col-3 full-height slide-item" style="padding-right: 10px; height: 400px">
                <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
                <div class="bg-white">
                  <p style="font-weight: bold;">{{ $t('text_carousel_item1') }}</p>
                  <p class="text-grey-6">{{ $t('date_carousel_item1') }}</p>
                </div>
              </div>
              <div class="col-3 full-height slide-item" style="padding: 0 10px; height: 400px">
                <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
                <div class="bg-white">
                  <p style="font-weight: bold;">{{ $t('text_carousel_item1') }}</p>
                  <p class="text-grey-6">{{ $t('date_carousel_item1') }}</p>
                </div>
              </div><div class="col-3 full-height slide-item" style="padding: 0 10px; height: 400px">
              <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
              <div class="bg-white">
                <p style="font-weight: bold;">{{ $t('text_carousel_item2') }}</p>
                <p class="text-grey-6">{{ $t('date_carousel_item2') }}</p>
              </div>
            </div><div class="col-3 full-height slide-item" style="padding-left: 10px; height: 400px">
              <div class="bg-blue-grey-3 full-width" style="height: 50%"></div>
              <div class="bg-white">
                <p style="font-weight: bold;">{{ $t('text_carousel_item2') }}</p>
                <p class="text-grey-6">{{ $t('date_carousel_item2') }}</p>
              </div>
            </div>
            </div>
          </q-carousel-slide>

          <template v-slot:control>
            <q-carousel-control class="q-gutter-md">
              <q-btn
                push rounded dense color="black" text-color="white" label="Navštívit blog" style="left: -175%" class="q-pa-sm"
              />
              <q-btn
                push round dense color="white" text-color="black" icon="fa fa-arrow-left"
                @click="this.$refs.carousel.previous()"
              />
              <q-btn
                push round dense color="white" text-color="black" icon="fa fa-arrow-right"
                @click="this.$refs.carousel.next()"
              />
            </q-carousel-control>
          </template>

        </q-carousel>
      </div>

      <q-banner class="bg-blue-grey-2 relative-position q-my-lg">
        <p class="section q-ma-none q-pa-md">{{ $t('footer') }}</p>
        <div class="row absolute-right q-my-auto content-center">
          <q-btn round outline dense target="_blank" href="" icon="fa-brands fa-facebook"  size="12px" padding="12px" class="q-mx-sm"/>
          <q-btn round outline dense target="_blank" href="" icon="fa-brands fa-instagram" size="12px" padding="12px" class="q-mx-sm"/>
          <q-btn round outline dense target="_blank" href="" icon="fa-brands fa-twitter"   size="12px" padding="12px" class="q-mx-sm"/>
          <q-btn round outline dense target="_blank" href="" icon="fa-brands fa-youtube"   size="12px" padding="12px" class="q-mx-sm"/>
        </div>
      </q-banner>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import conf from 'src/myconfiguration.json';
import { setCssVar } from 'quasar';
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'


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
    const i18n  = useI18n()
    const router = useRouter()
    const route = useRoute()

    router.push({ query: { lang: 'en' } })
    console.log('Default language on page is English')

    function enLang() {
      i18n.locale.value = 'en-US'
      router.push({ query: { lang: 'en' } })
      console.log('Change language on page to English')
    }

    function csLang(){
      i18n.locale.value = 'cs'
      router.push({ query: { lang: 'cs' } })
      console.log('Change language on page to Czech')
    }
    if (route.query.lang == 'cs'){
      i18n.locale.value = 'cs'
    }
    else{
      i18n.locale.value = 'en-US'
    }
    return {
      slide: ref(1),
      enLang, csLang
    }
  },

});

</script>

<style lang="scss">

  div.component1{
    background: no-repeat top right;
  }

  div.component1 > div{
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
  }

  .section{
    font-size: 1.5rem;
    font-weight: bold;
  }

  div.text p{
    max-width: 25%;
  }

  div.top-right-btns .q-btn:nth-child(2){
    margin-right: -5px;
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

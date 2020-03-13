<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header @pageWasChanged="currentPage=$event"></nav-header>
        <div id="instructions" class="text-center italic">
          <div class="row">
            <div class="col-sm-6">
              <p><em>&larr; Make changes in the edit card area below:</em></p>
            </div>
            <div class="col-sm-6">
              <p><em>And they will show on the card! &rarr;</em></p>
            </div>
          </div>
        </div>
        <transition
        appear 
        name="fade" 
        mode="out-in"
        @enter="enter">
          <keep-alive>
            <component :is="currentPage"></component>
          </keep-alive>
        </transition>
        <sc-footer></sc-footer>
      </div>
    </div>
  </div>
</template>

<script>
import FirebaseConfig from './firebaseConfig.js'
import Header from './components/Header.vue'
import CardFront from './components/card/CardFront.vue'
import CardInsideLeft from './components/card/CardInsideLeft.vue'
import CardInsideRight from './components/card/CardInsideRight.vue'
import CardBack from './components/card/CardBack.vue'
import Footer from './components/Footer.vue'

export default {
  data: function () {
    return {
      currentPage: 'cardFront'
    }
  },
  methods: {
    enter: function(el) {
      document.getElementById('instructions').style.display = "none";
    }
  },
  components: {
    navHeader: Header,
    cardFront: CardFront,
    cardInsideLeft: CardInsideLeft,
    cardInsideRight: CardInsideRight,
    cardBack: CardBack,
    scFooter: Footer
  }
}
</script>

<style>
  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #333
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(-2em);
  } 

  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease;
  }

  .scale-enter-active {
       animation: scale-in 0.5s;
   }

   .scale-leave-active {
       animation: scale-out 0.5s;
   }

   @keyframes scale-in {
       0% { transform: scale(0); }
       100% {transform: scale(1); }
   }

   @keyframes scale-out {
       0% { transform: scale(1); }
       100% {transform: scale(0); }
   }
   
</style>

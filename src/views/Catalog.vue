<template>
  <div class="body">
    <div class="container">
      <div class="row mt-4">
        <div class="col-xl-12">
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4" v-for="offer in offers" :key="offer.id">
              <OfferCard :title="offer.title"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Footer</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
  .body {
    padding-top: 56px;
  }
</style>

<script>
  import axios from 'axios';
  import OfferCard from "@/components/OfferCard.vue";

  export default {
  name: "Catalog",
  data() {
  return {
  offers: []
  }
  },
  components: {
  OfferCard
  },

  mounted() {
  axios.get(window.$apiURI + "/offers/GetAll").then(response => {
  this.offers = response.data;
  })
  }
  };
</script>

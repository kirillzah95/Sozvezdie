<template>
  <div class="body">
    <div class="container">
      <div class="row mt-4">
        <div class="col-xl-12">
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4" v-for="offer in offers" :key="offer.id">
              <OfferCard :id="offer.id" :title="offer.title" :photo="offer.photo" :description="offer.description" :price="offer.minPrice" :period="offer.period"/>
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
  methods: {
    FormatPeriods: function (periodStart, periodEnd) {
      var startDate = new Date(periodStart);
      var endDate = new Date(periodEnd);
      var diff = (endDate.getTime() - startDate.getTime()) / 86400000;
      var startDateY = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(startDate);
      var startDateM = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(startDate);
      var startDateD = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(startDate);
      var startDateConverted = startDateY + "." + startDateM + "." + startDateD;
      var endDateY = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(endDate);
      var endDateM = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(endDate);
      var endDateD = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(endDate);
      var endDateConverted = endDateY + "." + endDateM + "." + endDateD;
      return startDateConverted + " - " + endDateConverted + " (" + diff + " дн.)";
    }
  },
  async mounted() {
  await axios.get(window.$apiURI + "/offers/GetAll").then(response => {
  this.offers = response.data;
  this.offers = this.offers.map((offer)=> {
  if(offer.photoCard && offer.photoCard.thumbnail) {
          offer.photo = offer.photoCard.thumbnail;
        } else {
          offer.photo = "";
        }
        if(offer.periodStart && offer.periodEnd) {
          offer.period = this.FormatPeriods(offer.periodStart, offer.periodEnd);
        } else {
          offer.period = "";
        }
        return offer;
      });
    });
  }
  };
</script>

<style scoped="">
  .card, .card:visited, .card:hover, .card:active  {
  color: black;
  text-decoration: none;
  }

  .card-body {
  width: 100%;
  height: 350px;
  background-image: none;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  }

  .card-title-container {
  width: 100%;
  margin: 0px;
  padding: 0px;
  background-color: #00000050;
  color: white;
  font-size: 24px;
  }
  .card-title {
  color: white;
  font-size: 24px;
  margin: 0px;
  padding: 0px;
  }
  .card-period {
  color: white;
  font-size: 24px;
  }
  .card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  }
</style>

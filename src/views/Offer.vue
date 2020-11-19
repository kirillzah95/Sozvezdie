<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="card mt-4">
          <div class="card-body">
            <h3 class="card-title">{{ offer.title }}</h3>
            <p v-if="!!offer.period">Цена от {{ offer.minPrice }} ₽ за человека на {{ offer.period }}</p>
            <p v-else="">Цена от {{ offer.minPrice }} ₽ за человека</p>
            <p class="card-text">{{ offer.description }}</p>
          </div>
        </div>
        <div class="card card-outline-secondary my-4">
          <div class="card-header">
            {{ offer.header }}<div v-if="!!offer.duration">({{ offer.duration }} дней)</div>
          </div>
          <div class="card-body">
            <div class="container">
              <div class="row">
                  <div class="col-xl-3 mb-2 mt-2" v-for="photoEntry in offer.photoAlbum" :key="photoEntry.id">
                    <enlargeable-image class="PhotoAlbumPhoto" :src="photoEntry.thumbnail" :src_large="photoEntry.photo" />
                  </div>
                </div>
            </div>
          </div>
        <div class="card card-outline-secondary my-4">
          <div class="card-header">Маршрут тура</div>
          <div class="card-body">
            <div class="container">
              <div class="row" v-for="route in offer.route" :key="route.id">
                {{ route }}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import EnlargeableImage from '@diracleo/vue-enlargeable-image';
  
  export default {
  name: "Offer",
  data() {
  return {
  offer: []
  }},
  components: {
  EnlargeableImage
  },
  methods: {
  GetDurationInDays: function (periodStart, periodEnd) {
  var startDate = new Date(periodStart);
  var endDate = new Date(periodEnd);
  var diff = (endDate.getTime() - startDate.getTime()) / 86400000;
  return diff;
  },
  FormatPeriods: function (periodStart, periodEnd) {
  var startDate = new Date(periodStart);
  var endDate = new Date(periodEnd);
  var startDateM = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(startDate);
  var startDateD = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(startDate);
  var startDateConverted = startDateM + "." + startDateD;
  var endDateM = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(endDate);
  var endDateD = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(endDate);
  var endDateConverted = endDateM + "." + endDateD;
  return startDateConverted + " - " + endDateConverted;
  }
  },
  async mounted() {
  await axios.get(window.$apiURI + "/offers/GetData/" +this.$route.params.id).then(response => {
  this.offer = response.data;
  if(this.offer.periodStart && this.offer.periodEnd) {
  this.offer.period = this.FormatPeriods(this.offer.periodStart, this.offer.periodEnd);
  this.offer.duration = this.GetDurationInDays(this.offer.periodStart, this.offer.periodEnd);
  }
  });
  }
  };
</script>

<style scope>
  .PhotoAlbumPhoto {
    width: 200px;
    height: 200px;
  }
</style>

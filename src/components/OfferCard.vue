<template>
  <a :href="/offer/ + id" class="card h-100">
    <div class="card-body" v-bind:style="{ backgroundImage: 'url(' + photo + ')' }">
      <div></div>
      <div class="card-title-container">
        <div class="card-title">{{ title }}</div>
        <div class="card-period">start - end (days)</div>
      </div>
    </div>
    <div class="card-footer">
      <p class="card-text">{{ description }}</p>
    </div>
    <div class="card-footer">
      <small class="float-right">Цена от: {{ price }} Р</small>
    </div>
  </a>
</template>

<script>
  export default {
  name: "OfferCard",
  props: {
  title: String,
  photo: String,
  periodStart: String,
  periodEnd: String,
  description: String,
  price: String,
  id: String
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

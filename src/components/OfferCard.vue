<template>
    <div class="card h-100">
      <a href="#">
        <img class="card-img-top" :src="photo" alt="">
              </a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">{{ title }}</a>
        </h4>
        <p class="card-text">{{ description }}</p>
      </div>
      <div class="card-footer">
        <small class="float-right">Цена от: {{ price }} Р</small>
      </div>
    </div>
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
  price: String
  }
  };
</script>

<style scoped="">
</style>

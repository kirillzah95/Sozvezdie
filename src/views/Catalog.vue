<template>
  <div class="body">
    <div class="container">
      <div class="row mt-4">
        <div class="col-xl-12">
          <div class="row">
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
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
  import OfferCard from "@/components/OfferCard.vue";

  export default {
  name: "Catalog",
  components: {
  OfferCard
  }
  };
</script>

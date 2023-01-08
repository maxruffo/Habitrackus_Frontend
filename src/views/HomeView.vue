<template>
  <div class="home">
    <br/><br/>
    <div class="container text-center">
      <div class="row">
        <div class="col">
        </div>
        <div class="col-8">
          <CarouselComponent></CarouselComponent>
        </div>
        <div class="col">
        </div>
      </div>
    </div>
    <a class="btn btn-dark" href="/myhabits" role="button">Start</a>
  </div>
</template>

<script>
// @ is an alias to /src
import CarouselComponent from "@/components/CarouselComponent.vue";

export default {
  name: 'HomeView',
  components: {
    CarouselComponent
  }
}
</script>

<template>
  <div class="home">
    <h1>Welcome to Habitrackus</h1>
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

<style scoped>
h1{
  font-family: Roboto,Roboto,serif ;
  color: black;
}
</style>

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

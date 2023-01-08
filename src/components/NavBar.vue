<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <img src="../assets/Habitrackus.png" alt="Bootstrap" width="150" height="150">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/myhabits">MyHabits</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
.nav-link{
  font-size: 25px;
}
.container-fluid{
  background-color: darkslategray;
  border-radius:25px;
}
img{
  border-radius: 200px;
}

</style>

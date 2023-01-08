<template>
  <!DOCTYPE html>
  <div class="about-section">
    <h1>About Habittrackus</h1>
    <p>Welcome to Habitrackus, the ultimate tool for staying on top of your daily habits! Our website allows you to create a list of habits that you want to track, and then record your progress on a daily basis. Whether you're trying to develop healthy habits like exercising or eating more vegetables, or working on personal growth habits like reading or practicing mindfulness, Habit Tracker can help you stay on track and achieve your goals.</p>
  </div>

  <html>
  <head>
    <title>About | Habit Tracker</title>
  </head>
  <body>
  <p></p>
  <div class="features-header">
    <h2 class="features-title">Features</h2>
    <table>
      <thead>
      <tr>
        <th class="kopftabelle" scope="col">Number of Habits</th>
      </tr>
      </thead>
      <tbody class = "eintraege">
      <tr v-for="habit in habits.slice(-1)" :key="habit.id">
        <td>{{habit.id}}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="features-container">
    <p>1 - track your daily Habits</p>
    <p></p>
    <p>2 - See your Progress</p>
    <p></p>
    <p>3 - Add new Habits</p>
    <p></p>
  </div>

  <p></p>
  <p>We hope you enjoy using Habit Tracker and find it helpful in your journey towards building healthy, sustainable habits. If you have any questions or feedback, please don't hesitate to contact us.</p>
  </body>
  </html>

</template>

<script>

export default {
  name: "AboutView",
  data() {
    return {
      habits: []
    }
  },
  mounted() {
    const endpoint = 'http://localhost:8080/api/v1/habits'
    console.log(endpoint)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('http://localhost:8080/api/v1/habits', requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(habit => {
          this.habits.push(habit)
        }))
  },
}
</script>

<style>

.eintraege{font-family: Roboto,Roboto,serif ;
  font-size: 24px;
  color: black;
}
.kopftabelle{
  font-family: Roboto,Roboto,serif ;
  font-size: 24px;
  color: black;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
  width: 800px;
  margin: auto;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}


.features-header{
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
}
.features-container{
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto auto;
}

h1{
  font-family: Roboto,Roboto,serif ;
  color: black;
}
h4{
  font-family: Roboto,Roboto,serif ;
  color: black;
}
title{
  font-family: Roboto,Roboto,serif ;
  color: black;
}
p{
  font-family: Roboto,Roboto,serif ;
  color: black;
}
h2{
  font-family: Roboto,Roboto,serif ;
  color: black;
}
li{
  font-family: Roboto,Roboto,serif ;
  color: black;
}
</style>

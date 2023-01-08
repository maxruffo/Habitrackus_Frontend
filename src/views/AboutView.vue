<template>
  <!DOCTYPE html>
  <p></p>
  <html>
  <head>
    <title>About | Habit Tracker</title>
  </head>

  <body class="habits-tracked">
  <h1 class="title">About Habittrackus</h1>
  <p class="about-text">Welcome to Habitrackus, the ultimate tool for staying on top of your daily habits! Our website allows you to create a list of habits that you want to track, and then record your progress on a daily basis. Whether you're trying to develop healthy habits like exercising or eating more vegetables, or working on personal growth habits like reading or practicing mindfulness, Habit Tracker can help you stay on track and achieve your goals.</p>
  <p></p>
  <p class="about-text">We hope you enjoy using Habit Tracker and find it helpful in your journey towards building healthy, sustainable habits. If you have any questions or feedback, please don't hesitate to contact us.</p>
  <div class="container text-center">
    <div class="row">
      <div class="col">
      </div>
      <div class="col-8">
        <div class="container-text-center">
          <div class="row">
            <div class="col">
            </div>
            <div class="col-8">

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
          </div>
        </div>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
  <div class="float-container">

    <div class="float-child">
      <div class="green">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <p></p>
        <button type="button" class="btn-link"  onclick="location.href='https://github.com/maxruffo/Habitrackus_Frontend';">GitHub - Frontend</button>
      </div>
    </div>

    <div class="float-child">
      <div class="blue">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <p></p>
        <button type="button" class="btn-link"  onclick="location.href='https://github.com/maxruffo/Habitrackus_Backend';">GitHub - Backend</button>
      </div>
    </div>
  </div>
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
.float-container {
  padding: 20px;
}

.float-child {
  width: 50%;
  float: left;
  padding: 20px;
}
.btn-link{
  font-size: 20px;
  border-radius: 20px;
}
.title{
  color: rgb(85, 153, 122);
  font-size: 60px;
}

.about-text{
  color:white;
}
p{
  font-size:30px;
}
.habits-tracked{
  background-color: darkslategray;
}
div{
  background-color: darkslategray;
}
.eintraege{font-family: Roboto,Roboto,serif ;
  text-align: center;
  font-size: 50px;
  color: white;
}
.kopftabelle{
  font-family: Roboto,Roboto,serif ;
  font-size: 50px;
  color: white;

}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
  width: 800px;
  margin: auto;
  border-radius: 10px;
}


.features-header{
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
}
.features-container{
  background-color: darkslategray;
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

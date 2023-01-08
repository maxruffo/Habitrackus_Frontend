<template>
  <table class="table table-dark">
    <thead class="thead-dak">
    <tr>
      <th class="kopflinksoben" scope="col">Habit</th>
      <th class="kopfrechtsoben" scope="col">Done</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="habit in habits" :key="habit.id">
      <td>{{habit.name}}</td>
      <td>
        <label class="container">
          <input type="checkbox" :checked="habit.done">
          <span class="checkmark"></span>
        </label>
        </td>
    </tr>

    </tbody>
  </table>
</template>
//{{habit.done ? 'erledigt' : 'nicht erledigt'}}
// input class="form-check-input" type="checkbox" :value="habit.done" id="flexCheckChecked"
//:checked="1==habit.done"/>
<script>
export default {
  name: "HabitsList",
  data() {
    return {
      habits: []
    }
  },
  mounted(){
    const endpoint = 'http://localhost:8080/api/v1/habits'
    console.log(endpoint)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('http://localhost:8080/api/v1/habits',requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(habit => {
          this.habits.push(habit)
        }))
  },
}
</script>

<style scoped>
.kopflinksoben{
  border-top-left-radius : 20px;
}
.kopfrechtsoben{
  border-top-right-radius : 20px;
}
.container {
  display: block;
  border-radius: 25px;
  position: relative;
  padding-left: 35px;
  margin-bottom: 30px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  border-radius: 13px;
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eeee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #ffae00;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 10px;
  top: 7px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

</style>

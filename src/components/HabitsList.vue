<template>
  <table class="table table-dark">
    <thead class="thead-dak">
    <tr>
      <th class="kopflinksoben" scope="col">Habit</th>
      <th class="mitte" scope="col">Status</th>
      <th class="kopfrechtsoben" scope="col"></th>
    </tr>
    </thead>
    <tbody class = "eintraege">
    <tr v-for="habit in habits" :key="habit.id">
      <td>{{habit.name}}</td>
      <td>{{habit.done ? 'erledigt' : 'nicht erledigt'}}</td>
      <td>
        <label class="container">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  :checked="habit.done"  @click = editHabit(habit)>
          <button type="button" class=" btn mx-1" @click=deleteHabit(habit)>❌</button>
        </label>
        </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "HabitsList",
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
  methods: {
    deleteHabit(habit) {
      console.log(habit.done)
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };

      fetch("http://localhost:8080/api/v1/habits/" + habit.id, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    },
    editHabit(habit) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "name": habit.name,
        "done": !habit.done
      });

      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/api/v1/habits/"+habit.id, requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    }
  }
}
</script>

<style scoped>

.form-check-input{
width: 40px; height: 40px;
  margin-top: 0px;
}
.form-check-input:checked {
  background-color: #474e5d;
  border-color: white;
}
.mx-1{
  background-color: white;
  width: 40px; height: 40px;
}

.kopflinksoben{
  border-top-left-radius : 20px;

}
.kopfrechtsoben{
  border-top-right-radius : 20px;
}
</style>

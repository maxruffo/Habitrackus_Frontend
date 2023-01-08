<template>
  <form class="row g-2 needs-validation" novalidate>
    <div class="col-auto">
      <input type="text" class="form-control" id="newhabit" v-model=habitdescription required>
      <div class = "invalid-feedback">
        An empty Habit ist not a good Habit
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn btn-dark mb-3" @click="createHabit">Add Habit</button>
    </div>
  </form>

</template>

<script>
export default {
  name: "AddHabit",
  data() {
    return {
      habitdescription: '',
      done: false
    }
  },
  methods : {
    createHabit () {
      const valid = this.validate()
      if (valid) {
        console.log(this.habitdescription)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          "name": this.habitdescription,
          "done": false
        });

        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:8080/api/v1/habits", requestOptions)
            .catch(error => console.log('error', error));
      }
    },
    validate () {
      let valid = true
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                valid = false
                event.preventDefault()
                event.stopPropagation()
              }

              form.classList.add('was-validated')
            }, false)
          })
      return valid
    }
  }
}

</script>

<style scoped>
input{
  height:50px;
  width: 300px;
}
.btn-dark{
  font-size: 25px;
}
</style>

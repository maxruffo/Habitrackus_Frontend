<template>
  <h1>Personal Habits</h1>
  <br/><br/>
  <div class="container text-center">
    <div class="row">
      <div class="col">
      </div>
      <div class="col-8">
        <HabitsList></HabitsList>
        <div class="container text-center">
          <div class="row">
            <div class="col">
            </div>
            <div class="col-8">
              <AddHabit></AddHabit>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
</template>

<script>
import HabitsList from "@/components/HabitsList.vue";
import AddHabit from "@/components/AddHabit.vue";

export default {
  name: "MyHabitsView",
  components: {AddHabit, HabitsList}
}
</script>


<style scoped>

h1{
  font-family: Roboto,Roboto,serif ;
  color: rgb(85, 153, 122);
}

</style>

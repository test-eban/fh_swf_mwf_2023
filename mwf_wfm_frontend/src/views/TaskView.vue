<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Workforcemanagementsystem</h1>
        </div>
      </div>
    </section>
    <TaskTable />
  </div>
</template>
<script>
import TaskTable from '../components/TaskTable.vue';
export default {
  name: 'task',
  components: {
    TaskTable,
  },
};
</script>
<style lang="scss" scoped>
.hero {
  text-align: center;
  background-image: url('https://cdn.auth0.com/blog/vue-meetup/event-banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
}

.hero-body .title {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 60px;
}

.subtitle {
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
  font-size: 30px;
}

.button-block {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  bottom: -150px;

  .button {
    margin-right: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }

  .welcome {
    width: 400px;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  }
}

.is-xl {
  font-size: 1.7rem;
}
</style>
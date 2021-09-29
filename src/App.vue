<template>
  <div id="app">
    <div v-for="item in items"  v-bind:key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.email }}</p>
      <p>{{item.created_at | moment("from", "now")}} </p>
       <p>{{item.updated_at | moment("from", "now")}} </p>
       <p>{{item.email_verified_at | moment("from", "now")}} </p>
       
    </div>
     
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    const self = this;
    self.axios
      .get(
        "https://universalistic-brac.000webhostapp.com/api/get_users?fbclid=IwAR3uxkATSzIdS5cfJJAPtx-4mn8GBu2qEAEDs9hTh82zLoQPF-97A7RFc1c"
      )
      .then((res) => {
        self.items = res.data;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

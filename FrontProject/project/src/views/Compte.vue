<template>
    <Account/>
    <Footer/>
</template>

<script>
import dataJSON from '../assets/data.json'
import Footer from '../components/footer.vue';
import Account from '../components/Account.vue'
// @ is an alias to /src
export default {
     name: "Products",
    components: { Footer,Account},
  data() {
    return {
      restaurants: dataJSON.Restaurants,
    };
  },
};
</script>
<style>
</style>
 
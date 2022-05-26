<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" @click="testMock">点击</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    testMock() {
      axios.get('/api/tests').then(response => {
        console.log('response', response.data);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

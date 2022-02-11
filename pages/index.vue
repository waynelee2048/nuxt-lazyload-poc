<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/store-lazyload">store-lazyload page</nuxt-link>
      </li>
    </ul>
    <button type="button" @click="getTime">get momentTime by lazyload</button>
    <div>momentTime: {{ time }}</div>
  </div>
</template>

<script>
import { getMomentTime } from "../utils/time";

export default {
  data() {
    return {
      time: null,
    };
  },
  methods: {
    async getTime() {
      const foo = await getMomentTime();
      this.time = foo.format();
    },
  },
};
</script>

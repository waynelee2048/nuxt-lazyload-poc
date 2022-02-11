<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/">home</nuxt-link>
      </li>
    </ul>
    <h1>User Page</h1>
    <button @click="getTime">dispatch store time</button>
    <button @click="getGettersTime">get store getter time</button>
    <div>stateMomentTime: {{ stateMomentTime }}</div>
    <div>momentTime by getter: {{ momentTime }}</div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      momentTime: null,
    };
  },
  methods: {
    ...mapActions({
      init: "user/init",
    }),
    async getTime() {
      this.init();
    },
    async getGettersTime() {
      this.momentTime = await this.momentTimeByGetter;
    },
  },
  computed: {
    ...mapState({
      stateMomentTime: (state) => state.user.time,
    }),
    ...mapGetters({
      momentTimeByGetter: "user/momentTimeByGetter",
    }),
  },
};
</script>

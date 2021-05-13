<template>
  <div class="card-wrap">
    <h1>create medications</h1>
    <form @submit.prevent="createMeds()">
      <el-input type="text" v-model="name"></el-input>
      <button type="submit" class="el-button el-button--primary is-rounded">
        create meds
      </button>

      {{ listMeds }}
    </form>
  </div>
</template>

<script>
import { createMeds, getMeds } from "@/plugins/firebase";
export default {
  data() {
    return {
      name: "",
      listMeds: null
    };
  },
  mounted() {
    getMeds("89GMS1wG4XmLkfyqsrCH").then(data => {
      this.listMeds = data.name;
    });
  },
  methods: {
    createMeds() {
      createMeds({ name: this.name });
    }
  }
};
</script>

<style lang="scss"></style>

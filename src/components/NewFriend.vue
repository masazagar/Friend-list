<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name </label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone </label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>Email </label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <button type="submit">Add Friend</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },

  methods: {
    submitData() {
      this.$emit(
        "add-friend",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>

<template>
  <section class="contact">
    <p>{{ name }} {{ isFavorite ? "(Favorite)" : " " }}</p>

    <div>
      <button @click="$emit('add-favorite', id)">Favorites</button>
      <button @click="toggleData">Show data</button>
      <button @click="$emit('delete', id)">Delete</button>
    </div>
    <div class="details" v-if="show">
      <p><strong>Phone:</strong> {{ phone }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
    </div>
  </section>
</template>

<script>
export default {
  emits: ["add-favorite", "delete"],
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleData() {
      this.show = !this.show;
    },
    addFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite;
    },
  },
};
</script>

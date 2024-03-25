<template>
  <header>My friends</header>

  <div class="all-contacts">
    <new-friend @add-friend="addFriend"></new-friend>
    <friend-card
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phone="friend.phone"
      :email="friend.email"
      :isFavorite="friend.isFavorite"
      @add-favorite="favorites"
      @delete="deleteFriend"
    ></friend-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "joey",
          name: "Joey Tribbiani",
          phone: "041 567 346",
          email: "joey@tribbiani.com",
          isFavorite: false,
        },
        {
          id: "bing",
          name: "Chandler Bing",
          phone: "041 543 543",
          email: "chandler@bing.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    favorites(id) {
      let favoriteFriends = this.friends.find((friend) => friend.id === id);
      favoriteFriends.isFavorite = !favoriteFriends.isFavorite;
      console.log("this works");
    },

    addFriend(name, phone, email) {
      const newFriend = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      };

      this.friends.push(newFriend);
    },

    deleteFriend(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Madimi One", sans-serif;
}
header {
  background-color: rgb(172, 249, 223);
  padding: 10px;
  text-align: center;
  font-size: 3rem;
}
.contact,
#app form {
  font-size: 2rem;
  box-shadow: 0px 1px 3px grey;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.all-contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

button {
  background-color: rgb(172, 249, 223);
  border: none;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  margin-right: 0.3em;
}
.details {
  font-size: 1rem;
}
</style>

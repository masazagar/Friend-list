import { createApp } from "vue";
import App from "./App.vue";
import FriendCard from "./components/FriendCard.vue";
import NewFriend from "./components/NewFriend.vue";

const app = createApp(App);
app.component("new-friend", NewFriend);
app.component("friend-card", FriendCard);
app.mount("#app");

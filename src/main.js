import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "./style.css";
import Loader from "./components/Loader.vue";
import YouTubeButton from "./components/YouTubeButton.vue";
import MealItem from "./components/MealItem.vue";
// import ReadMore from "vue-read-more";

import App from "./App.vue";

createApp(App)
  .use(router)
  .use(store)
  .component("loader", Loader)
  .component("youtubebutton", YouTubeButton)
  .component("meal-item", MealItem)
  .mount("#app");

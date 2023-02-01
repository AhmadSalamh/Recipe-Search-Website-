import axiosClient from "../axiosClient";

export default {
  async searchMeals({ state, commit }, keyword) {
    state.searchedMeals.loading = true;
    await axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
      commit("setSearchedMeals", data.meals);
      state.searchedMeals.loading = false;
    });
  },

  async searchMealsByLetter({ state, commit }, letter) {
    await axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
      commit("setMealsByLetter", data.meals);
    });
  },

  async searchMealsByIngredient({ commit }, ing) {
    await axiosClient.get(`filter.php?i=${ing}`).then(({ data }) => {
      commit("setMealsByIngredient", data.meals);
    });
  },
};

export default {
  setSearchedMeals(state, meals) {
    state.searchedMeals.data = meals;
  },
  setMealsByLetter(state, meals) {
    state.searchByLetter = meals;
  },
  setMealsByIngredient(state, meals) {
    state.searchByIngredient= meals;
  },
};

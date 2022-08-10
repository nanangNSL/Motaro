import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getRecipe = createAsyncThunk("recipe/getRecipe", async () => {
  const response = await axios.get("https://motaro.herokuapp.com/recipe/get");
  return response.data.data;
});



const recipeEntity = createEntityAdapter({
  selectId: (recipe) => recipe.recipe_id,
});

const recipeSlice = createSlice({
  name: "recipe",
  initialState: recipeEntity.getInitialState(),
  extraReducers: {
    [getRecipe.fulfilled]: (state, action) => {
      recipeEntity.setAll(state, action.payload);
    },
    
  },
});

export const recipeSelector = recipeEntity.getSelectors(
  (state) => state.recipe
);
export default recipeSlice.reducer;

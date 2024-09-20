import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: [],
};

const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {},
});

export default linkSlice.reducer;

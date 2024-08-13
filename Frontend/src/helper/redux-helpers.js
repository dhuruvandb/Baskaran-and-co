export const handleAsyncThunk = (builder, thunk, thunkFunction, error) => {
  builder.addCase(thunk, thunkFunction);
  builder
    .addCase(thunk.pending, (state) => {
      state.status = "loading";
    })
    .addCase(thunk.fulfilled, thunkFunction)
    .addCase(thunk.rejected, (state) => {
      state.status = "failed";
      state.error = error;
    });
};

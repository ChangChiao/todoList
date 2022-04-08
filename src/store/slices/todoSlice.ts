import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  id: string;
  UserName: string;
};
type UserType = {
  user: User | {};
};

const initialState: UserType = {
  user: {},
};

export const UserSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User | {}>) => {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = UserSlice.actions;

export default UserSlice.reducer;

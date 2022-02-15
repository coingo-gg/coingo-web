import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface User {
    id: number;
    name: string;
}

export const usersSlice = createSlice({
    name: "users",
    initialState: [{}] as User[],
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            const { id, name } = action.payload;
            state.push({ id, name });
        },
    },
});

const { actions, reducer } = usersSlice;
export const { addUser } = actions;

export default reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    empDetailsId: ""
}

const postSlice = createSlice({
    name: "postSlice",
    initialState: initialState,
    reducers: {
        setEmpDetailsId: (state, {payload}) => {
            state.empDetailsId = payload;
        }
    }
})

export const {setEmpDetailsId} = postSlice.actions;
export const getEmpDetailsId = (state: any) => state.postSlice.empDetailsId;
export default postSlice.reducer;
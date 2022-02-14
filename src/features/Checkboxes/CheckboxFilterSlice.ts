import { createSlice } from "@reduxjs/toolkit";

const checkboxFilterInitialState = {
    selectedCheckboxList: []
}

const checkboxFilterSlice = createSlice({
    name: "checkboxFilters",
    initialState: checkboxFilterInitialState,
    reducers: {
        setCheckboxList: (state, {payload}) => {
            state.selectedCheckboxList = payload;
        }
    }
})

export const {setCheckboxList} = checkboxFilterSlice.actions;
export const getAllCheckboxes = (state: any) => state.checkboxFilters.selectedCheckboxList;
export default checkboxFilterSlice.reducer;
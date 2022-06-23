import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
    name: "Main",
    initialState: {
        items: [
            { id: 1, category: "Design", imgSrc: "Bitmap0.png", name: "SOFA" },
            { id: 2, category: "Branding", imgSrc: "Bitmap1.png", name: "KeyBoard" },
            { id: 3, category: "illustration", imgSrc: "Bitmap2.png", name: "Work Media" },
            { id: 4, category: "Motion", imgSrc: "Bitmap3.png", name: "DDDone" },
            { id: 5, category: "Design", imgSrc: "Bitmap4.png", name: "Abstract" },
            { id: 6, category: "Branding", imgSrc: "Bitmap5.png", name: "HandP" },
            { id: 7, category: "Motion", imgSrc: "Bitmap6.png", name: "Architect" },
            { id: 8, category: "Design", imgSrc: "Bitmap7.png", name: "CalcC" },
            { id: 9, category: "Branding", imgSrc: "Bitmap8.png", name: "Sport" },
            { id: 10, category: "Branding", imgSrc: "Bitmap8.png", name: "Sport2" },
            { id: 11, category: "Branding", imgSrc: "Bitmap1.png", name: "KeyBoard2" },
            { id: 13, category: "illustration", imgSrc: "Bitmap2.png", name: "Work Media2" },
            { id: 14, category: "Motion", imgSrc: "Bitmap3.png", name: "DDDone2" },
            { id: 15, category: "Design", imgSrc: "Bitmap4.png", name: "Abstract2" },
            { id: 16, category: "Branding", imgSrc: "Bitmap5.png", name: "HandP2" },
            { id: 17, category: "Motion", imgSrc: "Bitmap6.png", name: "Architec2" },
            { id: 18, category: "Design", imgSrc: "Bitmap7.png", name: "Calc2" },
            { id: 19, category: "Design", imgSrc: "Bitmap0.png", name: "SOFA2" },
            { id: 20, category: "Motion", imgSrc: "Bitmap3.png", name: "DDDone3" },
        ],
        SelectCategory: "Show all",
        selectItem: { isSelected: false, id: null },
    },
    reducers: {
        SetSelectCategory(state, action) {
            state.SelectCategory = action.payload
        },
        SetSelectItem(state, action) {
            state.selectItem.isSelected = !state.selectItem.isSelected
            state.selectItem.id = action.payload
        },
        DeleteItem(state, action) {
            state.items = state.items.filter(i => i.id !== action.payload)
        }
    }
})

export default MainSlice.reducer
export const { SetSelectCategory, SetSelectItem, DeleteItem } = MainSlice.actions
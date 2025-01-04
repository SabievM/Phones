import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    arr: [],
    counts: {},
};


export const addItems = createSlice({
    name: "add",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.arr.push(action.payload)
        },
        deleteItem: (state, action) => {
            state.arr = state.arr.filter(item => item.id !== action.payload.id);
        },
        increment: (state, action) => {
            const id = action.payload; // Получаем id товара
            if (state.counts[id]) {
                state.counts[id] += 1; // Увеличиваем количество
            } else {
                state.counts[id] = 1; // Устанавливаем количество в 1, если его еще не было
            }
        },
        decrement: (state, action) => {
            const id = action.payload; // Получаем id товара
            if (state.counts[id] > 1) {
                state.counts[id] -= 1; // Уменьшаем количество
            }
        },
    }
});

export const {addItem, increment, decrement, deleteItem} = addItems.actions
export default addItems.reducer 
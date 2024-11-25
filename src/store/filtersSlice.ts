import { FiltersType } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getFilterOptions = (filterOption: FiltersType) => {
    switch (filterOption) {
        case "category":
            return ["general", "business", "entertainment", "health", "science", "sports", "technology"];
        case "country":
            return ["ae", "ar", "at", "au"]
        case "sources":
            return ["ABC News", "Al Jazeera English", "Ars Technica", "Associated Press"]
        case "language":
            return ["ar", "de", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "se", "ud", "zh"];
        default:
            return ["general", "business", "entertainment", "health", "science", "sports", "technology"];
    }
}

const initialState: { filter: FiltersType, filterOptions: string[] } = {
    filter: "category",
    filterOptions: ["business", "entertainment", "general", "health", "science", "sports", "technology"]
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<FiltersType>) => {
            state.filter = action.payload;
            state.filterOptions = getFilterOptions(action.payload);
        },
    },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;


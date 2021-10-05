export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const toggleFavorites = (id) => {
    return({ type: TOGGLE_FAVORITES, payload: id });
}

export const addFavorites = (id) => {
    return ({ type: ADD_FAVORITES, payload: id });
}

export const removeFavorite = (id) => {
    return ({ type: REMOVE_FAVORITE, payload: id });
}
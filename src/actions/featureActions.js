export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"

// Step 5: Build an action creator
export const addFeature = (feature) => {
    return { type: ADD_FEATURE, payload: feature};
}

export const removeFeature = (feature) => {
    return { type: REMOVE_FEATURE, payload: feature}
}
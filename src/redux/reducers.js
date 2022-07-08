import actions from "./actions";
import { setLocalData, getLocalData } from "../utils/localStorage";

// Create state constant from local storage
const initState = getLocalData();

// Export image reducer
export default function imageReducer(state = initState, action) {
  // Manage the state according to action type
  switch (action.type) {
    // Add new entry in images state
    case actions.ADD_IMAGE: {
      const { points, comments } = state;
      points[action.newImage.id] = [];
      comments[action.newImage.id] = [];
      const newState = {
        ...state,
        images: [action.newImage, ...state.images],
        points,
        comments,
        selectedImage: action.newImage,
        newPoint: null,
        selectedPoint: null,
      };

      // Update local storage
      const error = setLocalData(newState);
      if (error) {
        alert(error);
        return state;
      }
      return newState;
    }

    // Update selected image in state
    case actions.CHANGE_SELECTED_IMAGE: {
      const newState = {
        ...state,
        selectedImage: action.id,
        newPoint: null,
        selectedPoint: null,
      };

      // Update local storage
      setLocalData(newState);
      return newState;
    }

    // Edot image in state
    case actions.EDIT_IMAGE: {
      const newImages = [];
      state.images.forEach((image) => {
        if (image.id === action.image.id) {
          newImages.push(action.image);
        } else {
          newImages.push(image);
        }
      });
      const newState = {
        ...state,
        images: newImages,
      };

      // Update local storage
      setLocalData(newState);
      return newState;
    }

    // Delete image and update the state
    case actions.DELETE_IMAGE: {
      const newImages = [];
      state.images.forEach((image) => {
        if (image.id !== action.image.id) {
          newImages.push(image);
        }
      });
      const { points, comments } = state;
      points[action.image.id] = [];
      comments[action.image.id] = [];
      const newState = {
        ...state,
        images: newImages,
        points,
        comments,
        selectedImage: "",
      };

      // Update local storage
      setLocalData(newState);
      return newState;
    }

    // Update toggle option in state
    case actions.TOGGLE_OPTIONS: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }

    // Update dimention in state
    case actions.SET_DIMENSION: {
      return { ...state, dimensions: action.dimensions };
    }

    // Cretae new point in state
    case actions.SET_NEW_POINT: {
      return {
        ...state,
        newPoint: action.newPoint,
        selectedPoint: action.newPoint,
      };
    }

    // Update selected point in state
    case actions.SET_SELECTED_POINT: {
      return {
        ...state,
        selectedPoint: action.selectedPoint,
        newPoint: null,
      };
    }

    // Add comment in state
    case actions.SET_COMMENTS: {
      const id = action.selectedImage.id;
      const { points, comments } = state;
      points[id] = action.points;
      comments[id] = action.comments;
      const newState = {
        ...state,
        points,
        comments,
        newPoint: action.newPoint,
      };

      // Update local storage
      setLocalData(newState);
      return newState;
    }
    default:
      return state;
  }
}

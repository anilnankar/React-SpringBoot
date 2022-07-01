import { UPLOAD_IMAGE } from "../types";
import { setLocalData, getLocalData } from '../../utils/localStorage';
const initialState = getLocalData();

export default function reducer(state = initialState, action) {
  console.log("reducer---------------");
  console.log(action);
  console.log(state);

  switch (action.type) {
    case UPLOAD_IMAGE: {
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
        selectedPoint: null
      };
      const error = setLocalData(newState);
      if (error) {
        alert(error);
        return state;
      }
      return newState;
    }
    default:
      console.log("default---------------");
      return state;
  }
}

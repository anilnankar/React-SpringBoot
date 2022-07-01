import { UPLOAD_IMAGE } from "../types";

const actions = {
  uploadImage: file => {
    return (dispatch, getState) => {
      dispatch({
        type: UPLOAD_IMAGE,
        newImage: {
          id: new Date().getTime(),
          file
        }
      });
    };
  }
};
export default actions;
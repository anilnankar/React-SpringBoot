// Create acttions of redux
const actions = {
  // Create action constants
  ADD_IMAGE: "ADD_IMAGE",
  CHANGE_SELECTED_IMAGE: "CHANGE_SELECTED_IMAGE",
  EDIT_IMAGE: "EDIT_IMAGE",
  DELETE_IMAGE: "DELETE_IMAGE",
  TOGGLE_OPTIONS: "TOGGLE_OPTIONS",
  SET_DIMENSION: "SET_DIMENSION",
  SET_NEW_POINT: "SET_NEW_POINT",
  SET_SELECTED_POINT: "SET_SELECTED_POINT",
  SET_COMMENTS: "SET_COMMENTS",

  // Add image action to upload
  addImage: (file) => {
    return (dispatch) => {
      dispatch({
        type: actions.ADD_IMAGE,
        newImage: {
          id: new Date().getTime(),
          file,
        },
      });
    };
  },

  // Change selected image
  changSelectedeImage: (id) => ({
    type: actions.CHANGE_SELECTED_IMAGE,
    id,
  }),

  // Edit image action
  editImage: (image) => ({
    type: actions.EDIT_IMAGE,
    image,
  }),

  // Delete image action
  deleteImage: (image) => ({
    type: actions.DELETE_IMAGE,
    image,
  }),

  // Toggel image action
  toggleOptions: (key, value) => ({
    type: actions.TOGGLE_OPTIONS,
    key,
    value,
  }),

  // Set dimention action
  setDimensions: (dimensions) => ({
    type: actions.SET_DIMENSION,
    dimensions,
  }),

  // Set new point on image action
  setNewPoint: (newPoint) => ({
    type: actions.SET_NEW_POINT,
    newPoint,
  }),

  // Set selected point of image action
  setSelectedPoint: (selectedPoint) => ({
    type: actions.SET_SELECTED_POINT,
    selectedPoint,
  }),

  // Set comment of selected image action
  setComments: (selectedImage, points, comments, newPoint) => ({
    type: actions.SET_COMMENTS,
    selectedImage,
    points,
    comments,
    newPoint,
  }),
};

// Export actions
export default actions;

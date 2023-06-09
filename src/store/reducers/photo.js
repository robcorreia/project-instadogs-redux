import { PHOTO_GET } from "../../Api";

const FETCH_PHOTO_STARTED = "photo/fecthStarted";
const FETCH_PHOTO_SUCCESS = "photo/fecthSuccess";
const FETCH_PHOTO_ERROR = "photo/fecthError";

const fetchPhotoStarted = () => ({
  type: FETCH_PHOTO_STARTED,
});

const fecthPhotoSuccess = (data) => ({
  type: FETCH_PHOTO_SUCCESS,
  payload: data,
});

const fecthPhotoError = (error) => ({
  type: FETCH_PHOTO_ERROR,
});

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export default function photo(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTO_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case FETCH_PHOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case FETCH_PHOTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
}

export const fetchPhoto = (id) => async (dispatch) => {
  try {
    dispatch(fetchPhotoStarted());
    const { url, options } = PHOTO_GET(id);
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === false) throw new Error(data.message);
    dispatch(fecthPhotoSuccess(data));
  } catch (error) {
    dispatch(fecthPhotoError(error.message));
  }
};

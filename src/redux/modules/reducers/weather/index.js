import { WEATHER } from '../../actions/Types';

const initialState = {
  loading: false,
  message: '',
  data: undefined
};

export default (state = initialState, { type, message = '', data = undefined }) => {
  switch (type) {
    case WEATHER.REQUEST:
      return {
        ...state,
        loading: true,
        message,
        data
      };
    case WEATHER.SUCCESS:
    case WEATHER.FAIL:
      return {
        ...state,
        loading: false,
        message,
        data
      };
    case WEATHER.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

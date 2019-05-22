import { AUTH } from '../../actions/Types';

const initialState = {
  loading: false,
  message: '',
  data: undefined
};

export default (state = initialState, { type, message = '', data = undefined }) => {
  switch (type) {
    case AUTH.REQUEST:
      return {
        ...state,
        loading: true,
        message,
        data
      };
    case AUTH.SUCCESS:
    case AUTH.FAIL:
      return {
        ...state,
        loading: false,
        message,
        data
      };
    case AUTH.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

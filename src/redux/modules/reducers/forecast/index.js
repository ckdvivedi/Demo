import moment from 'moment';
import { FORECAST } from '../../actions/Types';

const initialState = {
  loading: false,
  message: '',
  data: undefined
};

export default (state = initialState, { type, message = '', data = undefined }) => {
  switch (type) {
    case FORECAST.REQUEST:
      return {
        ...state,
        loading: true,
        message,
        data
      };
    case FORECAST.SUCCESS:
    case FORECAST.FAIL:
      return {
        ...state,
        loading: false,
        message,
        data: filterDayWise(data)
      };
    case FORECAST.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const filterDayWise = ({ list = [] }) => list
  .map(item => ({ ...item, date: moment.unix(item.dt).format('LL') }))
  .filter((item, index, self) => self.map(mapObj => mapObj.date).indexOf(item.date) === index);

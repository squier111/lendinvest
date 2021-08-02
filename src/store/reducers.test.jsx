import { actions } from './reducers';
import { reducer } from './reducers';
import data from '../mock-data/data.json';

describe('reducer', () => {
  it('should handle GET_LOANS', () => {
    const startAction = {
      type: actions.GET_LOANS,
      payload: data,
    };
    expect(reducer({}, startAction)).toEqual(data);
  });
});

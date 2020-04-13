import {combineReducers} from '../myRedux';
import {appReducer} from './app';
import {compReducer} from './comp';

const reducer = combineReducers({
    app: appReducer,
    comp: compReducer
})

export default reducer;
import data from "../../data/data.json";
import { ADD_PORTFOLIO } from "../constannts/actionTypes";

const initialState = {
    portfolios: data.portfolios,
    menu: "home"
};

function rootReducer(state = initialState, action) {
    if(action.type === ADD_PORTFOLIO) {
        return Object.assign({}, state, {
            portfolios: state.portfolios.concat(action.payload)
        });
    }
    return state;
};

export default rootReducer;
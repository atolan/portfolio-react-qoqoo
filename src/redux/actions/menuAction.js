import { CHANGE_MENU } from "../constannts/actionTypes";
import { CHANGE_PTYPE } from "../constannts/actionTypes";

const changeMenu = (payload) => {
    return {
        type: CHANGE_MENU,
        payload: payload,
    };
};

const changePtype = (payload) => {
    return {
        type: CHANGE_PTYPE,
        payload: payload,
    };
}
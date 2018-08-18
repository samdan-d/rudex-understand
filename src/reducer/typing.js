import { SET_TYPING_VALUE } from '../constants/action-types.js';

export default function typying(state = '', action) {
    switch (action.type) {
        case SET_TYPING_VALUE:
            return action.payload;
        default:
            return state;
    }
};
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMMENTS} from './action-types'

/* const inintComments = [
    {username: 'zhangjiahao', content: '22ages'},
    {username: 'haobange', content: '22ages'},

] */
const inintComments = []

export function comments(state=inintComments, action) {
    switch(action.type){
        case ADD_COMMENT:
            return [action.data, ...state]
        case DELETE_COMMENT:
            return state.filter((comment, index) => index!==action.data)
        case RECEIVE_COMMMENTS:
            return action.data
        default:
            return state
    }

}
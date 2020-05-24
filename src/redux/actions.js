
import {ADD_COMMENT, DELETE_COMMENT,RECEIVE_COMMMENTS} from './action-types'


//同步添加
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})
//同步删除
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})
//同步接收comments
const receiveComments = (comments) => ({type: RECEIVE_COMMMENTS, date:comments})

//异步从后台获取数据
export const getComments = () => {
    return dispatch => {
        setTimeout(() => {
            const comments = [
                {username: 'zhangjiahao', content: '22ages'},
                {username: 'haobange', content: '22ages'},
            
            ]
            //分发一个action
            dispatch(receiveComments(comments))
        },1000)
    }
}
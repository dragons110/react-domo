import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './commentItem.css'

export default class CommentItem extends Component{
    //5、接受一个评论对象，先声明其类型
    static propTypes = {
        comment: PropTypes.object.isRequired,
        //22、
        deleteComment:PropTypes.func.isRequired,
        //26、
        index:PropTypes.number.isRequired
    }
    //23
    handleClick = () => {
        //24
        const {comment,deleteComment,index} = this.props
        //提示
        if(window.confirm(`确定删除${comment.username}的评论吗`)){
         //25、确定后删除 
         //需要从List传入index  
         deleteComment(index)
        }
        
    }

    render(){
        //6、取出comment
        const {comment} = this.props
        return (
            <li className="list-group-item">
            <div className="handle">
              <a href="javascript:;" onClick={this.handleClick}>delete</a>
            </div>
            {/* 7、提取comment.username和comment.content 放入标签 */}
            <p className="user"><span >{comment.username}</span><span>   speak:</span></p>
            <p className="centence">{comment.content}</p>
          </li>
        )
    }
}
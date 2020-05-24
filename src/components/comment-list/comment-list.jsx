import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentItem from '../comment-item/comment-item'//引入，使生成多个

import './commentlist.css'
export default class CommentList extends Component{
  //3、把数据传入LIST之后，CommentList要读取数据。读取数据之前要先声明传入的数据类型。
  //加上static是给组件类指定属性  不加就是给组件对象（this）指定属性
  static propTypes = {
    comments: PropTypes.array.isRequired,
    //21、声明
    deleteComment:PropTypes.func.isRequired
  }
  render(){
    //4、读取comments值  先把它取出来定义
    const {comments,deleteComment} = this.props
    //27、计算出是否显示
    const display = comments.length===0 ? 'block' : 'none'
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        {/* style={{display:display}}  ES6语法可简写 style={{display}} */}
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
        {
          //8、使用CommentItem组件，生成多个
          comments.map((c, index) => <CommentItem comment={c} key={index} deleteComment={deleteComment} index={index}/>)
        }  
        </ul>
      </div>
    )
  }
}
/* CommentList.PropTypes = {
  comments: PropTypes.array.isRequired
} 给组件类（CommentList）指定属性*/
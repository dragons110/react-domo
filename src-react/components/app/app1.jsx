import React, {Component} from 'react'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'
export default class App extends Component{
    //1、初始化数据
    /* constructor(props){
        super(props)
        this.state={
            comments:[
            {username:'Tom', content:'React还不错'},
            {username:'JIT', content:'React太难'},
            ]
        }
    } */
    //简便写法  给组件对象（this）指定state属性   App(组件类对象)
    state={
        comments:[
        {username:'Drake', content:'Tooie slide'},
        {username:'J Cole', content:'MdilleChild'},
        {username:'Kanye west', content:'Heartless'}
        ]
    }

    //16、数据在哪个组件，更新数据的行为就在哪个组件
    //添加评论
    addComment = (comment) => {
      const {comments} = this.state
      comments.unshift(comment)
      this.setState({comments})
    }
    //19、删除评论  数组中通过索引删除
    deleteComment = (index) => {//20、传入list  list再传入item
      const {comments} = this.state
      comments.splice(index, 1)
      this.setState({comments})
    }


    render(){
        const {comments} = this.state  //这种数据一般先定义好
        return (
            <div id="app">
  <div>
    <header className="site-header jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div className="container">
    {/* 17 */}
      <CommentAdd addComment={this.addComment}/>
      <CommentList comments={comments} deleteComment={this.deleteComment}/>
      {/* 2、把comments传入list  取名最好与前面一致  所以叫comments */}
    </div>
  </div>
</div>
        )
    }
}
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class CommentAdd extends Component{
  //18、声明
  static propTypes = {
    addComment:PropTypes.func.isRequired
  }



  //11、定义状态,初始化数据
  state = {
    username:'',
    content:''
  }


  handleSubmit = () => {
    //10、收集数据（两种方式:1、自动收集，受控组件  2、手动收集，非受控组件ref）
    const comment = this.state
    //11、更新状态
    this.props.addComment(comment)
    //清除输入数据
    this.setState({
      username:'',
      content:''
    })
  }
  //14、
  handleNameChange = (event) => {
    const username = event.target.value
    this.setState({username})
  }
  handleContentChange = (event) => {
    const content = event.target.value
    this.setState({content})
  }

  render(){
    const {username, content} = this.state
    return (
      <div className="col-md-4">
      <form className="form-horizontal">
        <div className="form-group">
          <label>用户名</label>
          {/* 12、input读state数据  添加value */}
          <input type="text" className="form-control" placeholder="用户名" value={username}
          //13、绑定onChange事件
            onChange={this.handleNameChange}
          />
        </div>
        <div className="form-group">
          <label>评论内容</label>
          <textarea className="form-control" rows="6" placeholder="评论内容" value={content}
          onChange={this.handleContentChange}></textarea>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
          {/* 9、绑定监听onClick事件 */}
            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>submit</button>
          </div>
        </div>
      </form>
    </div>
    )
  }
}
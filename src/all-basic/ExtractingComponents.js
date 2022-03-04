import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const formatDate = (date) => {
  return date.toLocaleDateString();
}

class Image extends Component {
  render() {
    return (
      <div>
        <img className='avatar'
          src={this.props.user.avatarUrl}
          alt={this.props.user.name} />
      </div>
    )
  }
}

class UserInfo extends Component {
  render(){
    return(
      <div className='userInfo'>
          {<Image user={this.props.info} />}
          <div className='userinfo-name'>{this.props.info.name}</div>
        </div>
    )
  }
}

export default class Index extends Component {
  render() {
    return (

      <div className='comment'>  
      {<UserInfo info={this.props.author}/>}      
        <div className='comment-text'>{this.props.text}</div>
        <div className='comment-date'>{formatDate(this.props.date)}</div>
      </div>
    )
  }
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoying learning React',
  author: {
    name: 'Reddy',
    avatarUrl: 'https://placekitten.com/g/64/64'
  }
}
ReactDOM.render(<Index
  date={comment.date}
  text={comment.text}
  author={comment.author}
/>, document.getElementById('root'))

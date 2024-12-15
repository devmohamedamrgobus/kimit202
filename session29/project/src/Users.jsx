import React, { Component } from 'react'
import axios from 'axios'
export default class Users extends Component {

  constructor(){
    console.log('constructor')
    super();
      this.state = {
        usersdata:[]
      }
  }


    // componentDidMount(){
    //   console.log('componentDidMount')
    //   this.getdata()
    // }

    // componentDidUpdate(){
    //   console.log('componentDidUpdate')
    // }


    // componentWillUnmount(){

    // }


  render() {
    console.log('render')
    let {usersdata} = this.state
    return (
        <>
            <button onClick={this.getdata}>show data</button>

                <ul>
                    {usersdata.map((user)=> <li key={user.id}>{user.name}</li> )}
                 </ul>        
        </>
        
    )
  }


  getdata = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        this.setState({usersdata:res.data})
    })
  }

}

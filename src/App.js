import React, { Component } from 'react';
import {connect} from 'react-redux';
import Row from './componenets/Row/Row'
import './App.css';

class App extends Component {


  choiceChanged=(event,id)=>{
    this.props.myProp(event.target.value,id);
  }
  render() {
  
    let jsxSource=null;
    {console.log(this.props.data)}
    jsxSource=(
      this.props.data.map(item=>
      <Row key={item.id} email={item.email} prediction={item.prediction} changed={(event)=>this.choiceChanged(event,item.id)}></Row>)
    );




    return (
      <div className="App">
          {jsxSource}
      </div>
    );
  }
}

const mapStateToProps=state=>{
  return {
    data:state.data
  };
}

const mapDispatchToProps=dispatch=>{
  return {
    myProp:(newChoice,id)=>dispatch({
      type:'UPDATE',
      id:id,
      choice:newChoice
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

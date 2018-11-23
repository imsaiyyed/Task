import React, { Component } from 'react';
import {connect} from 'react-redux';
import Row from './componenets/Row/Row'
import './App.css';

class App extends Component {


  componentDidMount(){
    // fetch('http://localhost:5000/api/dashboard/all').then((response,data)=>{
    //   console.log(response,data);  

    // //this.props.initializeState(response);
    // });

    fetch('http://localhost:5000/api/dashboard/all')
    .then(response => response.json())
    .then(json => {
      
      console.log('Here 2',json);
      this.props.initializeState(json);
    });
  }
  choiceChanged=(event,id)=>{
    this.props.myProp(event.target.value,id);
  }
  render() {
  
    let jsxSource=null;
    // jsxSource=(
    //   this.props.data.map(item=>
    //   <Row key={item.id} email={item.email} prediction={item.prediction} changed={(event)=>this.choiceChanged(event,item.id)}></Row>)
    // );

    jsxSource=(
    
      this.props.data.map(item=>
      <Row 
        key={item.Id} 
        email={item.Subject} 
        prediction={item.Categorization} 
        changed={(event)=>this.choiceChanged(event,item.Id)}>
        </Row>)
      
 
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
    }),
    initializeState:(allEmails)=>dispatch({
      type:'INITIALIZE',
      allEmails:allEmails
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

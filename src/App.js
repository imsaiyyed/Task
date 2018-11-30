import React, { Component } from 'react';
import {connect} from 'react-redux';
import Row from './componenets/Row/Row'
import { Table } from 'reactstrap';

import './App.css';

class App extends Component {


  componentDidMount(){
    // fetch('http://localhost:5000/api/dashboard/all').then((response,data)=>{
    //   console.log(response,data);  

    // //this.props.initializeState(response);
    // });

    fetch('http://localhost:4000/api/emails')
    .then(response => response.json())
    .then(json => {
      
      console.log('Here 2',json);
      this.props.initializeState(json);
    });
  }
  choiceChanged=(event,id)=>{
    //http://localhost:3000/api/emails/
 
    fetch('http://localhost:4000/api/emails/'+id, {
      method: 'PATCH',
      body: JSON.stringify({
      Category:event.target.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => 
    {
      console.log(json)
    })
    this.props.myProp(event.target.value,id);
    
  }

  exportRecords=()=>{
    
    fetch('http://localhost:4000/api/export')
    .then(response => response.json())
    .then(json => {
      if(json.status==="SUCCESS")
      {
        alert("Records exported successfully");
      }
      console.log(json);
    });
  }
  render() {
  
    let jsxSource=null;
    // jsxSource=(
    //   this.props.data.map(item=>
    //   <Row key={item.id} email={item.email} prediction={item.prediction} changed={(event)=>this.choiceChanged(event,item.id)}></Row>)
    // );

    jsxSource=(
      <div className="Scroll">{
      this.props.data.map(item=>
      <Row 
        key={item.Id} 
        id={item.Id}
        email={item.Subject} 
        prediction={item.Categorization} 
        changed={(event)=>this.choiceChanged(event,item.Id)}>
        </Row>)  
       }
    </div>
    );

    return (
      <div className="App">
      
     <Table>
        <thead>
          <tr>
            <th className='EmailColumn' >Email</th>
            {/* <th className='CategoryColumn' >Category</th> */}
            <th className='ChoiceColumn' >Choice</th>
          </tr>
        </thead>
        
      </Table>
      
          {jsxSource}
      <div className="Dash">
      <button className="exportBtn" onClick={this.exportRecords}>Export</button>

        <label>Total count:{this.props.total}</label><br/>       

        <div>
            <span className="UpdatedLabel">Updated count:{this.props.updated}</span>
            <span className="RemainingLabel">Remaining count:{this.props.total-this.props.updated}</span>
        </div>
        {/* <label></label>
        <label></label> */}

      </div>
      </div>

    );
  }
}

const mapStateToProps=state=>{
  return {
    data:state.data,
    total:state.total,
    updated:state.updated
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
//  background-image: url('./assets/back1.png');

const initialState={
    data:[
        
    ],
    updated:0
}


const reducer=(state=initialState,action)=>{
    if(action.type==="UPDATE")
    {
        const newObj={...state}
        let copy=[...newObj.data];
        for(let item in copy)
        {
            if(action.id===copy[item].Id)
            {
                console.log(item);
                copy[item].Categorization=action.choice;
                copy.splice(item,1);
            }
        }
        newObj.data=copy;
        let updated=newObj.updated;
        updated=updated+1;
        return ({...newObj,updated:updated
        });
    }
    else if(action.type==="INITIALIZE"){
        const newObj={...state}
        let copy=[...newObj.data];
        copy=[...action.allEmails];
        newObj.data=copy;
        return({...newObj,total:copy.length});
    }
    return state;
}

export default reducer;
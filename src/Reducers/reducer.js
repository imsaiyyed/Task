const initialState={
    data:[
        {
            id:1,
            email:'asdfasdasdasd sdsddfdas cas',
            prediction:'asdasd'
        },
        {
            id:2,
            email:'asdfasdasdasd sdsddfdas cas',
            prediction:'asdasd'
        },
        {
            id:3,
            email:'asdfasdasdasd sdsddfdas cas',
            prediction:'asdasd'
        },
        {
            id:4,
            email:'asdfasdasdasd sdsddfdas cas',
            prediction:'asdasd'
        },
    ]
}


const reducer=(state=initialState,action)=>{
    //console.log('here',action);
    if(action.type==="UPDATE")
    {
        /*let copy={...state.data};
        console.log(state.data);

        for(let item in copy)
        {
            if(action.id===copy[item].id)
            {
                copy[item].prediction=action.choice;
                console.log("Here");

            }
        }*/
        //console.log(state);
        const newObj={...state}
        let copy=[...newObj.data];
        for(let item in copy)
        {
            if(action.id===copy[item].Id)
            {
                copy[item].Categorization=action.choice;
            }
        }
        newObj.data=copy;
        return ({...newObj
        });
    }
    else if(action.type==="INITIALIZE"){
        console.log(state);
        console.log(action.allEmails);
        const newObj={...state}
        let copy=[...newObj.data];
        copy=[...action.allEmails];
        newObj.data=copy;
        for(let item in copy)
        {
            console.log(copy[item].Id);
        }
        return({...newObj});
    }
    return state;
}

export default reducer;
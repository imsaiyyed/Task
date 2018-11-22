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
    console.log('here',action);
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
        console.log(state);
        const newObj={...state}
        let copy=[...newObj.data];
        for(let item in copy)
        {
            if(action.id===copy[item].id)
            {
                copy[item].prediction=action.choice;
            }
        }
        newObj.data=copy;
        return ({...newObj
        });
    }
    return state;
}

export default reducer;
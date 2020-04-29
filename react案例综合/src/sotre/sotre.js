import { createStore } from 'redux';

function collect_action(item) {
    return {
        type: "COLLECT_ACTION",
        item,
    }
}

function call_collect_action(id) {
    return {
        type: "CALL_COLLECT_ACTION",
        id,
    }
}

function collect_reducer(state = [], action) {
    state=JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "COLLECT_ACTION":
            state.push(action.item);
            // console.log(state);
            return state;
        case "CALL_COLLECT_ACTION":
            let currIndex=state.findIndex((item,index)=>{return item.id===action.id});
            if(currIndex !==-1){
                state.splice(currIndex,1);
            }
            // console.log(state);
            return state;

        default:
            return state;
    }
}

let store=createStore(collect_reducer);

export {
    store,
    collect_action,
    call_collect_action
}




//下列代码属于分页器 redux 尝试  未实现效果 暂时弃用
// function add_action(obj) {
//     return {
//         type: "ADD_ACTION",
//         obj,
//     }
// }

// function add_reducer(state = {}, action) {
//     state = JSON.parse(JSON.stringify(state));

//     switch (action.type) {
//         case "ADD_ACTION":
//             if (action.obj.page < (action.obj.total / action.obj.count)) {
//                 action.obj.page +=1;
//             }
//             // action.obj.page=page;
//             state=action.obj;
//             // console.log(state);
//             return state;
//         default:
//             return state;
//     }
// }

// let store = createStore(add_reducer);

// export {
//     store,
//     add_action
// }





import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Axios from 'axios';

function req_action() {
    return function (dispatch) {
        Axios.get("/list").then(res => {
            // console.log(res.data.list);
            dispatch(allData_action(res.data.list));
        })
    }
}

function allData_action(data) {
    return {
        type: "ALLDATA_ACTION",
        data,
    }
}

function add_action(item) {
    return {
        type: "ADD_ACTION",
        item,
    }
}

function del_action(id) {
    return {
        type: "DEL_ACTION",
        id,
    }
}

function creat_action() {
    return {
        type: "CREAT_ACTION",
    }
}

function amend_action() {
    return {
        type: "AMEND_ACTION",
    }
}

let data = {
    allList: [],
    list: [],
    flag: false,
    addFlag:false,
}

function esc_reducer(state = data, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "ALLDATA_ACTION":
            state.allList = action.data;
            return state;

        case "ADD_ACTION"://添加
            let obj = {
                "id": 0,
                "title": "",
                "state": 0,
                "num": 0,
                "name": "",
                "time": new Date().toLocaleDateString(),
            };
            if (state.allList[0].content.length) {
                let id = state.allList[0].content[state.allList[0].content.length - 1].id;
                obj.id =state.flag ? action.item.id :id + 1;
            }else{
                obj.id=state.flag ? action.item.id : 0;
            }
            obj.title = action.item.title;
            obj.name = action.item.name;
            if (state.flag) {
                let currIndex = state.allList[0].content.findIndex((item) => { return item.id === action.item.id });
                if (currIndex !== -1) {
                    state.allList[0].content.splice(currIndex, 1,obj);
                }
            } else {
                state.allList[0].content.push(obj);
            }
            state.addFlag=true;

            return state;

        case "DEL_ACTION"://删除
            let currIndex = state.allList[0].content.findIndex((item) => { return item.id === action.id });
            if (currIndex !== -1) {
                state.allList[0].content.splice(currIndex, 1);
            }
            return state;

        case "CREAT_ACTION":
            state.flag = false;
            return state;

        case "AMEND_ACTION":
            state.flag = true;
            return state;
        default:
            return state;
    }
}

let store = createStore(esc_reducer, applyMiddleware(thunk));

export {
    store,
    req_action,
    del_action,
    creat_action,
    amend_action,
    add_action,
}
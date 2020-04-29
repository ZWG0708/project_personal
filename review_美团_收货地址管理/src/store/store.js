import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Axios from 'axios';

function req_action() {
    return function (dispatch) {
        Axios.get("/list").then(res => {
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

function change_flag_action() {
    return {
        type: "CHANGE_FLAG_ACTION",
    }
}

function all_flag_action() {
    return {
        type: "ALL_FLAG_ACTION",
    }
}


function address_action(obj) {
    return {
        type: "ADDRESS_ACTION",
        obj,
    }
}

function edit_action(id) {
    return {
        type: "EDIT_ACTION",
        id,
    }
}

function del_data_action() {
    return {
        type: "DEL_DATA_ACTION",
    }
}

function del_action(num) {
    return {
        type: "DEL_ACTION",
        num,
    }
}

let data = {
    allData: [],
    list: [],
    num: 0,
    sexFlag: false,
    currIndex: 0,
    flag: false,
    maskFlag: false,
}

function coll_reducer(state = data, action) {
    state = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "ALLDATA_ACTION"://默认地址
            state.allData = action.data;
            state.num += 1;
            return state;

        case "CHANGE_FLAG_ACTION"://男女切换
            state.sexFlag = !state.sexFlag;
            return state;

        case "ALL_FLAG_ACTION"://新建收货地址 
            state.flag = false;
            state.sexFlag=false;
            return state;

        case "ADDRESS_ACTION":// 编辑 /新建  判断 修改更新/添加数据
            let { val1, val2, val3, val4 } = action.obj;
            // if(!val1 ||!val2||!val3 || !val4){
            //     // alert('1');
            // }
            
            let obj = {};
            if (state.allData.length) {
                obj.id = state.flag ? state.allData[state.currIndex].id : state.allData[state.allData.length - 1].id + 1;
            } else {
                obj.id = state.flag ? state.allData[state.currIndex].id : state.allData.length;
            }

            obj.name = val3;
            obj.tel = val4;
            obj.city = val1 + val2;
            obj.sex = state.sexFlag ? "0" : '1';

            if (state.flag) {
                state.allData.splice(state.currIndex, 1, obj);
            } else {
                state.sexFlag=false;
                state.allData.push(obj);
            }

            // console.log(state.allData);
            return state;

        case "EDIT_ACTION"://点击编辑  去编辑页
            let currIndex = state.allData.findIndex((item) => { return item.id === action.id });            
            if (currIndex !== -1) {
                state.currIndex = currIndex;
                state.flag = true;
                state.sexFlag = state.allData[state.currIndex].sex === "0" ? true : false;
            }
            return state;

        case "DEL_DATA_ACTION"://删除 弹窗
            state.maskFlag = true;
            return state;

        case "DEL_ACTION"://删除地址
            if (action.num === 1) {
                state.allData.splice(state.currIndex, 1);
                if (state.allData.length === 0) {
                    state.allData = [];
                    state.flag = false;
                }
            }
            state.maskFlag = false;
            return state;

        default:
            return state;
    }
}


let store = createStore(coll_reducer, applyMiddleware(thunk));

export {
    store,
    req_action,
    change_flag_action,
    address_action,
    edit_action,
    all_flag_action,
    del_data_action,
    del_action,
}
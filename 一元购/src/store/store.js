import { createStore, applyMiddleware } from "redux";
import Axios from "axios";
import thunk from 'redux-thunk';

function all_action() {
    return function (dispatch) {
        Axios.get('/list').then(res => {
            dispatch(loadData(res.data.list))
        })
    }
}

function loadData(data) {
    return {
        type: "LOADDATA",
        data,
    }
}

function call_cart_action(item) {//添加购物车
    return {
        type: "CALL_CART_ACTION",
        item,
    }
}

function del_cart_action(id) {//删除购物车
    return {
        type: "DEL_CART_ACTION",
        id,
    }
}

function collect_action(item) {//添加收藏
    return {
        type: "COLLECT_ACTION",
        item,
    }
}

function del_collect_action(id) {//取消收藏
    return {
        type: "DEL_COLLECT_ACTION",
        id,
    }
}



function change_flag_action() {
    return {
        type: "CHANGE_FLAG_ACTION",
    }
}

function next_action(id) {//数量++
    return {
        type: "NEXT_ACTION",
        id,
    }
}

function prev_action(id) {//数量--
    return {
        type: "PREV_ACTION",
        id,
    }
}


function radio_action(id) {//单选
    return {
        type: "RADIO_ACTION",
        id,
    }
}

function sure_action(num) {//弹框
    return {
        type: "SURE_ACTION",
        num,
    }
}

let data = {
    dataList: [],//请求的总数据
    list: [],//购物车数据
    flag: false,//全选开关
    maskFlag: false,//弹框开关
    currentIndex: 0,//记录删除下标
    collectList: [],//收藏列表
}
function all_reducer(state = data, action) {
    state = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'LOADDATA':
            state.dataList = action.data;
            return state;

        case "CALL_CART_ACTION"://添加购物车
            let findData = state.list.find((item, index) => { return item.id === action.item.id });
            if (!findData) {
                action.item.flag = state.flag;
                // action.item.flag = false;
                action.item.count = 1;
                state.list.push(action.item);
            } else {
                action.item.count = findData.count += 1;
            }
            return state;

        case "COLLECT_ACTION"://添加收藏
            state.collectList.push(action.item);
            return state;

        case "DEL_COLLECT_ACTION"://取消收藏
            let curr = state.collectList.findIndex((item, index) => { return item.id === action.id });
            if (curr !== -1) {
                state.collectList.splice(curr, 1);
            }
            return state;

        case "DEL_CART_ACTION"://删除购物车商品
            let currIndex = state.list.findIndex((item, index) => { return item.id === action.id });
            if (currIndex !== -1) {
                state.list.splice(currIndex, 1);
            }
            return state;

        case "CHANGE_FLAG_ACTION"://全选
            state.flag = !state.flag;
            state.list.map((item) => {
                item.flag = state.flag;
            });

            return state;

        case "NEXT_ACTION"://数量++
            let currIndexs = state.list.findIndex((item, index) => { return item.id === action.id });
            // state.list.map((item.));
            state.list[currIndexs].count += 1;
            return state;
        case "PREV_ACTION"://数量--
            let currIndex2 = state.list.findIndex((item, index) => { return item.id === action.id });
            // state.list.map((item.));
            if (state.list[currIndex2].count > 1) {
                state.list[currIndex2].count -= 1;
            } else {
                //自己封写 弹框 处理
                state.maskFlag = true;//弹框显示/隐藏 
                state.currentIndex = currIndex2;//

                //confirm 弹框 处理
                // if (window.confirm('是否删除！')) {
                //     state.list.splice(currIndex2, 1);
                // }
                // alert('是否删除！');
            }
            return state;

        case "RADIO_ACTION"://单选
            let findData1 = state.list.find((item, index) => { return item.id === action.id });
            if (findData1) {
                findData1.flag = !findData1.flag;
            }
            let flags = state.list.every((item) => { return item.flag });
            state.flag = flags;
            return state;

        case "SURE_ACTION"://弹框
            if (action.num === 1) {
                state.list.splice(state.currentIndex, 1);
            }
            state.maskFlag = false;
            return state;

        default:
            return state;
    }

}

let store = createStore(all_reducer, applyMiddleware(thunk));

export {
    store,
    all_action,
    call_cart_action,
    del_cart_action,
    change_flag_action,
    next_action,
    prev_action,
    radio_action,
    sure_action,
    collect_action,
    del_collect_action,
}
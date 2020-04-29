import Mock from 'mockjs';

//swiper组件接口
Mock.mock('/swiper-list', 'post', function (options) {
    //解构参数
    let { count } = JSON.parse(options.body);
    let data = Mock.mock({
        "list|5": [
            {
                "id|+1": 0,
                "img": "@image(100x100,@color)",
            }
        ]
    });

    let list = data.list.slice(0, count);

    return {
        "status": 200,
        list,
        count,
    }

});

//lazy组件接口
Mock.mock('/lazy-list', 'get', {
    "status": 200,
    "list|5": [
        {
            "id|+1": 0,
            "img": "@image(100x100,@color)",
            "title": "@ctitle",
        }
    ]
});

//分页器组件接口
Mock.mock('/paging-list', 'post', function (options) {
    //解构参数
    let { page, count } = JSON.parse(options.body);
    let data = Mock.mock({
        "list|100": [
            {
                "id|+1": 0,
                "name": "@cname",
                "title": "@ctitle",
                "age|20-50": 1,

            }
        ]
    });

    let list = data.list.slice((page - 1) * count, page * count);

    return {
        "status": 200,
        total:data.list.length,
        list,
        count,
    }
});


//bScroll组件接口
let datas = Mock.mock({
    "list|100": [
        {
            "id|+1": 0,
            "name": "@cname",
            "title": "@ctitle",
            "age|20-50": 1,
        }
    ]
});


Mock.mock('/bScroll-list', 'post', function (options) {
    //解构参数
    let { page, count } = JSON.parse(options.body);
   
    let list = datas.list.slice((page-1)*count, page * count);

    return {
        "status": 200,
        total:datas.list.length,
        page,
        list,
        count,
    }
});


//table组件接口
Mock.mock('/table-list', 'post', function (options) {
    //解构参数
    let { page, count } = JSON.parse(options.body);
    let data = Mock.mock({
        "list|100": [
            {
                "id|+1": 0,
                "name": "@cname",
                "title": "@ctitle",
                "age|20-50": 1,

            }
        ]
    });

    let list = data.list.slice((page - 1) * count, page * count);

    return {
        "status": 200,
        total:data.list.length,
        list,
        count,
    }
});





let dataCollect=Mock.mock({
    "list|6":[
        {
            "id|+1":0,
            "img":"@image(100x100,@color)",
            "title":"@ctitle",
            "price|1-100":1,
        }
    ]
})

Mock.mock("/list",'get',{
    "status":200,
    "list":dataCollect.list
})




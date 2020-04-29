import Mock from 'mockjs';

let data = Mock.mock({
    "list|3": [
        {
            "id|+1": 0,
            "navTitle|+1": ['作品管理', '博文管理', '分类管理'],
            "content|3": [
                {
                    "id|+1": 0,
                    "title":"@ctitle",
                    "state":0,
                    "num|1-10":1,
                    "name":"@cname",
                    "time":"@Date",
                }
            ]
        }
    ]
})

Mock.mock("/list",'get',{
    "status":200,
    list:data.list,
})
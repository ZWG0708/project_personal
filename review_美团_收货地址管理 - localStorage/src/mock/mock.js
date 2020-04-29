import Mock from 'mockjs';

let data=Mock.mock({
    "status":200,
    "list|2":[
        {
            "id|+1":0,
            "name":"@cname",
            "tel|13100000000-19100000000":1,
            "city":"@county(true)",
            "sex":"0",
        }
    ]
});

Mock.mock("/list",'get',{
    "status":200,
    list:data.list,
});
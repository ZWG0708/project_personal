import Mock from 'mockjs';

let data=Mock.mock({
    "status": 200,
    "list|10": [
        {
            "id|+1": 0,
            "nav|+1": ['全部', '十元专区', '潮流数码', '家用电器', '化妆个护', '时尚奢品', '汇吃零食', '送女友', '送男友', '其他'],
            "content|10": [
                {
                    "id|+1": 0,
                    "img": "@image(50x50,@color)",
                    "price|1-100.2": 1,
                    // "count":0,
                    "title": "@ctitle",
                }
            ]

        }
    ]
})

Mock.mock('/list', 'get', {
    "status": 200,
    "list":data.list,
})
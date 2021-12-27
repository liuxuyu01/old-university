import Mock from 'mockjs'

const random =  Mock.Random
export const mockList = Mock.mock({
    'data|10':[
        {
            'id|+1':1,
            creatTime:()=>random.data(),
            name:()=>random.cname(2,4),
            price: () => random.float(1, 100),
            email:()=>random.email(),
            desc: () => random.csentence(10, 20),
        }
    ]
})

// export const getList

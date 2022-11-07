//求和相关的配置
export default  {
    //开启命名空间
    namespaced: true,
    actions: {
        jia(context, value) {
            context.commit('JIA', value)
        },
        jian(context, value) {
            context.commit('JIAN', value)
        },
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500);
        }
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        //当前的和
        sum: 0,
        school: "xx大学",
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
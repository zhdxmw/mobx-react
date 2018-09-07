import {observable, computed, action, autorun, reaction, runInAction} from 'mobx'
import $http from './../https'
class Singer {
    @observable count = 0;
    @observable amount = 20;
    @observable list = [
        {
            title: "Make coffee",
            done: true,
        },
        {
            title: "Find biscuit",
            done: false
        }
    ];
    @computed get all(){
        return this.amount * 2
    }
    subscribeServerToStore(){
        reaction(
            () => this.list.map(todo => todo.title),
            titles => console.log("reaction 2:", titles.join(", "))
        )
    }

    @action.bound
    addAmount(num){
        this.amount += num;
        this.list.push({ title: "explain reactions", done: false });
    }

    //async  action  异步 Actions (动作)
    async asyncAction(){

        try {
            await $http.get('/proxy/plist/index&json=true').then(res => {
                runInAction(() => {
                    this.count += 10
                    console.log(123)
                })
            })

        } catch (error) {
            runInAction(() => {
               console.log('error')
            })
        }
    }
}

const singer = new Singer();
export default singer
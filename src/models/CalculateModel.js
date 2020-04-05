import model from '@symph/joy/model'
import procude from 'immer';

@model()
export default class CalculateModel {

    //the mount point of store state tree, must unique in the app.
    namespace = 'calculate';

    //this is the initial state of model
    initState = {
        counter: 0,
        a: {
            b: {
                c: {
                    count: 0,
                },
            },
        },
    };

    async add({number}) {
        let {counter, ...rest} = this.getState();

        counter += number;
        this.setState({
            counter,
            ...rest,
        })
    }

    async addDeep() {
        let oriState = this.getState();
        this.setState(
            procude(oriState, draft => {
                draft.a.b.c.count += 1
            })
        )
    }

}

import actions from './actions'


const cartReducer = (state, action) => {
    switch(action.type) {
        case actions.ADD_ITEM:{
            const itemAdded = {...action.value}
            
            const indexInclude = state.findIndex(item => item.id === itemAdded.id)

            if (indexInclude < 0) {
                return [...state, itemAdded]
            } else {
                itemAdded.amount += state[indexInclude].amount
                const newState = [...state]
                newState[indexInclude] = itemAdded
                return newState
            }
        }
        case actions.INCREASE_AMOUNT:{
            const id = action.value
            const newState = [...state]
            let newItemChanged 
            newState.forEach((item, index) => {
                if(item.id === id) {
                    newItemChanged = {...item}
                    newItemChanged.amount++;
                    newState[index] = newItemChanged
                }
            })
            return newState
        }
        case actions.DECREASE_AMOUNT:{
            const id = action.value
            const newState = [...state]
            let newItemChanged 
            newState.forEach((item, index) => {
                if(item.id === id) {
                    newItemChanged = {...item}
                    newItemChanged.amount--;
                    newState[index] = newItemChanged
                }
            })
            return newState
        }
        case actions.REMOVE_ITEM:{
            const id = action.value
            const newState = state.filter(item => item.id !== id)            
            return newState
        }
        case actions.RESET:{
            return []
        }
        default: return state

    }
    
}

export default cartReducer












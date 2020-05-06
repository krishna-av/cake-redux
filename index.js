// added for version tag 1.0.1

// application - dispatch - action - reducer - store

// Action Creator - function which returns actions
const redux = require('redux');
const reduxLogger = require("redux-logger");         m998u



const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
       type: BUY_CAKE,
       info: 'Describe the ingriedents for cake'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICE_CREAM,
        info: 'go and eat before it melts'
    }

}

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// reducer function take intiailState and action which returns a new state
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                numOfCakes: state.numOfIceCreams - 1
            }
            default:
                return state
    }
}


const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})



// accepts reducer function as parameter
// step1: holding the application state
const store = redux.createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => console.log("update state", store.getState()));
// dispatch action as parameter
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()








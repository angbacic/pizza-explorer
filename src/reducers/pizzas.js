const redux = require('redux')

const initialState = [
    {
      id: 1,
      name: 'Pizza Margarita',
      description: 'Minimalism is key!',
      ingredients: [
        'tomato',
        'mozarella',
        'basil'
      ]
    },
    {
      id: 2,
      name: 'Pizza Napoletana',
      description: 'The mafia knows whats best for you',
      ingredients: [
        'tomato',
        'mozarella'
      ]
    },
    {
      id: 3,
      name: 'Pizza Bianca',
      description: 'Did somebody say oil?',
      ingredients: [
        'olive oil',
        'salt',
        'rosemary'
      ]
    }
  ]




const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'ADD_PIZZA':
      return [
        ...state,
        action.payload]
      
    default:
      return state
    }
  }

  const store = redux.createStore(reducer)

  const action={
    type: 'ADD_PIZZA',
    payload : {
      name: '',
      description: ''
    }
  }
  
  store.dispatch(action)
  export default reducer
 
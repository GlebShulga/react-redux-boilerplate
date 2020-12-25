const CREATE_SQUARE = 'CREATE_SQUARE'
const GENERATE = 'GENERATE'

const initialState = {
  list: [],
  rows: 0,
  cols: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SQUARE: {
      return {
        ...state,
        [action.axis]: action.number
      }
    }
    case GENERATE: {
      return {
        ...state,
        list: action.multiply
      }
    }
    default:
      return state
  }
}

export function createSquare(number, axis) {
  return (dispatch) => {
    if (axis === 'cols' || axis === 'rows') {
      dispatch({ type: CREATE_SQUARE, axis, number })
    }
  }
}

export function generate() {
  return (dispatch, getState) => {
    const store = getState()
    const multiply = new Array(store.create.rows * store.create.cols).fill(0)
    dispatch({ type: GENERATE, multiply })
  }
}
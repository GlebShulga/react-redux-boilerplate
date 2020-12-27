const CREATE_SQUARE = 'CREATE_SQUARE'
const GENERATE = 'GENERATE'
const RANDOM_NUMBER_ADD = 'RANDOM_NUMBER_ADD'
const UPDATE_FIELD = 'UPDATE_FILED'
const MAKE_GREEN = 'MAKE_GREEN'
const MAKE_RED = 'MAKE_RED'

const initialState = {
  list: [],
  rows: 0,
  cols: 0,
  activeIndex: null
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
    case RANDOM_NUMBER_ADD: {
      return {
        ...state,
        activeIndex: action.number
      }
    }
    case UPDATE_FIELD: {
      return {
        ...state,
        list: action.newArray
      }
    }
    case MAKE_GREEN: {
      return {
        ...state,
        list: action.newArrayGreen
      }
    }
    case MAKE_RED: {
      return {
        ...state,
        list: action.newArrayRed
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

export function addRandomNumber(number) {
  return (dispatch) => {
    dispatch({ type: RANDOM_NUMBER_ADD, number })
  }
}

function changeValue(arr, index, newValue) {
  return arr.map((it, ind) => (ind === index ? newValue : it))
}

export function randomSquare() {
  return (dispatch, getState) => {
    const store = getState()
    const { list } = store.create
    const indexOfList = list.reduce((acc, rec, index) => {
      return rec === 0 ? [...acc, index] : acc
    }, [])
    const randomNumber = Math.floor(Math.random() * indexOfList.length)
    dispatch({ type: RANDOM_NUMBER_ADD, number: indexOfList[randomNumber] })
    const newArray = changeValue(list, indexOfList[randomNumber], 1)
    dispatch({ type: UPDATE_FIELD, newArray })
  }
}

export function changeGreen() {
  return (dispatch, getState) => {
    const store = getState()
    const { list } = store.create
    const { activeIndex } = store.create
    const newArrayGreen = changeValue(list, activeIndex, 2)
    dispatch({ type: MAKE_GREEN, newArrayGreen })
  }
}

export function changeRed() {
  return (dispatch, getState) => {
    const store = getState()
    const { list } = store.create
    const { activeIndex } = store.create
    const newArrayRed = changeValue(list, activeIndex, -1)
    dispatch({ type: MAKE_RED, newArrayRed })
  }
}

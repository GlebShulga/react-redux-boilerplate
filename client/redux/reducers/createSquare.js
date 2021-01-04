/* eslint-disable no-use-before-define */
import {
  GRAY_SQUARE,
  YELLOW_SQUARE,
  GREEN_SQUARE,
  RED_SQUARE,
  INC_TIMER,
  DEC_TIMER
} from '../../constants/constants'

const CREATE_SQUARE = 'CREATE_SQUARE'
const GENERATE = 'GENERATE'
const RANDOM_NUMBER_ADD = 'RANDOM_NUMBER_ADD'
const UPDATE_FIELD = 'UPDATE_FILED'
const MAKE_GREEN = 'MAKE_GREEN'
const MAKE_RED = 'MAKE_RED'
const ACTIVE_TIMER = 'ACTIVE_TIMER'
const SET_GAME_RESULT = 'SET_GAME_RESULT'
const UPDATE_TIMEOUT_VALUE = 'UPDATE_TIMEOUT_VALUE'

const initialState = {
  list: [],
  rows: 0,
  cols: 0,
  activeIndex: null,
  activeTimer: null,
  gameResult: null,
  hardMode: false,
  timeoutValue: 1000,
  countObj: { green: 0, red: 0 }
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
    case ACTIVE_TIMER: {
      return {
        ...state,
        activeTimer: action.timer,
        countObj: action.countObj
      }
    }
    case SET_GAME_RESULT: {
      return {
        ...state,
        gameResult: action.gameResult
      }
    }
    case UPDATE_TIMEOUT_VALUE: {
      return {
        ...state,
        timeoutValue: action.hardModeTimer
      }
    }
    default:
      return state
  }
}

export function createSquare(number, axis) {
  return (dispatch) => {
    if (axis === 'cols' || axis === 'rows' || axis === 'hardMode') {
      dispatch({ type: CREATE_SQUARE, axis, number })
    }
  }
}

export function generate() {
  return (dispatch, getState) => {
    const store = getState()
    const multiply = new Array(store.create.rows * store.create.cols).fill(GRAY_SQUARE)
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

export function changeRed() {
  return (dispatch, getState) => {
    const store = getState()
    const { list, hardMode, timeoutValue } = store.create
    const { activeIndex } = store.create
    const newArrayRed = changeValue(list, activeIndex, RED_SQUARE)
    if (hardMode) {
      const hardModeTimer = timeoutValue * INC_TIMER
      dispatch({ type: UPDATE_TIMEOUT_VALUE, hardModeTimer })
    }
    dispatch({ type: MAKE_RED, newArrayRed })
    dispatch(randomSquare())
  }
}

export function randomSquare() {
  return (dispatch, getState) => {
    const store = getState()
    const { activeTimer, list, timeoutValue } = store.create
    const indexOfList = list.reduce((acc, rec, index) => {
      return rec === GRAY_SQUARE ? [...acc, index] : acc
    }, [])
    const redCount = list.reduce((acc, rec) => {
      return rec === RED_SQUARE ? acc + 1 : acc
    }, 0)
    const greenCount = list.reduce((acc, rec) => {
      return rec === GREEN_SQUARE ? acc + 1 : acc
    }, 0)
    if (redCount >= list.length / 2) {
      dispatch({ type: SET_GAME_RESULT, gameResult: 'Lose' })
      clearTimeout(activeTimer)
      return
    }
    if (greenCount >= list.length / 2) {
      dispatch({ type: SET_GAME_RESULT, gameResult: 'Win' })
      clearTimeout(activeTimer)
      return
    }
    if (indexOfList.length > 0) {
      const randomNumber = Math.floor(Math.random() * indexOfList.length)
      dispatch({ type: RANDOM_NUMBER_ADD, number: indexOfList[randomNumber] })
      const newArray = changeValue(list, indexOfList[randomNumber], YELLOW_SQUARE)
      dispatch({ type: UPDATE_FIELD, newArray })
      const timer = setTimeout(() => {
        dispatch(changeRed())
      }, timeoutValue)
      dispatch({ type: ACTIVE_TIMER, timer, countObj: { red: redCount, green: greenCount } })
    } else {
      clearTimeout(activeTimer)
    }
  }
}

export function changeGreen() {
  return (dispatch, getState) => {
    const store = getState()
    const { activeIndex, activeTimer, list, hardMode, timeoutValue } = store.create
    const newArrayGreen = changeValue(list, activeIndex, GREEN_SQUARE)
    if (hardMode) {
      const hardModeTimer = timeoutValue * DEC_TIMER
      dispatch({ type: UPDATE_TIMEOUT_VALUE, hardModeTimer })
    }
    clearTimeout(activeTimer)
    dispatch({ type: MAKE_GREEN, newArrayGreen })
    dispatch(randomSquare())
  }
}

export function gameResultToNull() {
  return (dispatch) => {
    dispatch({ type: SET_GAME_RESULT, gameResult: null })
  }
}
import { call, put, takeEvery } from 'redux-saga/effects'
import { post } from '@/api'

import { actions } from './index.redux'

function* generator(action) {
  try {
    const { data } = yield call(post, action.payload)
    yield put({ type: actions.eventSuccess, payload: data })
  } catch (e) {
    yield put({ type: actions.eventFailed, payload: e.message })
  }
}

function* sagas() {
  yield takeEvery(actions.event, generator)
}

export default sagas

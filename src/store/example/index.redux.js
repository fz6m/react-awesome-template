export const actions = {
  event: 'event',
  eventSuccess: 'event_success',
  eventFailed: 'event_failed',
}

const initialState = {
  status: 'open',
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.eventSuccess:
      return { ...state, ...payload }

    default:
      return state
  }
}

export default reducer

export const action = (payload) => ({
  type: actions.event,
  payload,
})

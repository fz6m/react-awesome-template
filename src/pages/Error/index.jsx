import { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'

import { get } from '@/api'
import { action } from '@/store/example/index.redux'

const data = {
  key: 'value',
}

function Error({ status, post }) {
  useEffect(() => {
    const query = data
    get(query)
  }, [])

  useEffect(() => {
    post(data)
  }, [post])

  return (
    <Fragment>
      <div>redux state.example.status: {status}</div>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  status: state.example.status,
})

const mapDispatchToProps = {
  post: (payload) => action(payload),
}

export default connect(mapStateToProps, mapDispatchToProps)(Error)

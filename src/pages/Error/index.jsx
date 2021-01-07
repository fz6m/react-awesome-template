import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { get } from '@/api'
import { action } from '@/store/example/index.redux'

import SwrExample from './swr'

const data = {
  key: 'value',
}

function Error({ status, post }) {
  // 1. default async api
  useEffect(() => {
    const query = data
    get(query)
  }, [])

  // 2. redux saga async function
  useEffect(() => {
    post(data)
  }, [post])

  return (
    <>
      <div>redux state.example.status: {status}</div>
      <SwrExample />
    </>
  )
}

const mapStateToProps = (state) => ({
  status: state.example.status,
})

const mapDispatchToProps = {
  post: (payload) => action(payload),
}

export default connect(mapStateToProps, mapDispatchToProps)(Error)

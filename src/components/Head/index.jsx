import { createElement } from 'react'
import { Helmet } from 'react-helmet'

let index = 0

function createHeader(head) {
  if (!head.key) {
    head.key = index++
  }
  head.props = { ...head.props, key: head.key }
  return createElement(head.type, head.props, head.children)
}

export default function Head({ children, header }) {
  return (
    <Helmet>
      {header.map(createHeader)}
      {children}
    </Helmet>
  )
}

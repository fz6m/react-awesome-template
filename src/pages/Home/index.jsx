import { Fragment } from 'react'
import styled from '@emotion/styled'

// 1. external css fileal css filecss file
import './home.less'

// 2. styled-component
const RedText = styled.div`
  color: red;
`

// 3. css props
const GreenText = {
  color: 'green',
}

export default function Home() {
  return (
    <Fragment>
      {/* programme 1 */}
      <div className="orange">Independent css file style</div>
      {/* programme 2 */}
      <RedText>Home</RedText>
      {/* programme 3 */}
      <div css={GreenText}>Css props style</div>
    </Fragment>
  )
}

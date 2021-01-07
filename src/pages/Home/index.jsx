import { Fragment } from 'react'
import styled from '@emotion/styled'

// 1. external css fileal css filecss file
import './index.less'

// 2. use css module
import style from './index.module.less'

// 3. styled-component
const RedText = styled.div`
  color: red;
`

// 4. css props
const GreenText = {
  color: 'green',
}

export default function Home() {
  return (
    <Fragment>
      {/* programme 1 */}
      <div className="orange">Independent css file style</div>
      {/* programme 2 */}
      <div className={style.pink}>Css module</div>
      {/* programme 3 */}
      <RedText>Css styled component</RedText>
      {/* programme 4 */}
      <div css={GreenText}>Css props style</div>
    </Fragment>
  )
}

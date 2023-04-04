import styled from '@emotion/styled'
import { FlexAlignCSS } from '../../Styles/common'

export const Line = styled.div`
	justify-content: ${({ justify }) => justify};
	${FlexAlignCSS}
`

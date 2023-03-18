import styled from '@emotion/styled'
import { FlexCenterCSS, FlexColumnCSS } from '../Styles/common'

function Loading() {
	return (
		<S.Wrapper>
			<S.Container>
				<img src={`${process.env.PUBLIC_URL}/logo.png`} width={200} alt="" />
				<S.Text>💡 이슈를 불러오고 있습니다 💡</S.Text>
			</S.Container>
		</S.Wrapper>
	)
}
export default Loading

const Wrapper = styled.div`
	width: 100%;
	height: 80vh;
	${FlexCenterCSS}
`

const Container = styled.div`
	width: 50%;
	margin: 0 auto;
	${FlexColumnCSS}
	align-items: center;
`
const Text = styled.div`
	font-size: 20px;
	font-weight: bold;
	@media screen and (max-width: 655px) {
		font-size: 15px;
	}
`

const S = { Wrapper, Container, Text }

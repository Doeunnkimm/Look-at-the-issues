/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FlexColumnCSS, HoverCSS, ShadowCSS } from '../../../Styles/common'
import { BsChat } from 'react-icons/bs'
import remarkGfm from 'remark-gfm'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import IconBox from '../../../Components/IconBox/IconBox'
import Line from '../../../Components/Line/Line'

function IssueBox({ number, title, body, commentLen, updatedAt }) {
	const { owner, repository } = useParams()
	const navigate = useNavigate()

	return (
		<S.Wrapper onClick={() => navigate(`/${owner}/${repository}/${number}`)}>
			<Line
				css={css`
					align-items: flex-start;
				`}
			>
				<S.BoldText>🌎 {number}</S.BoldText>
				<S.Title
					css={css`
						margin-left: 20px;
					`}
				>
					{title}
				</S.Title>
			</Line>
			<S.ContentBox>
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
				<Line
					justify={'flex-end'}
					css={css`
						margin-top: 30px;
					`}
				>
					<S.SmallText>last updated : {updatedAt}</S.SmallText>
					<IconBox
						css={css`
							margin-left: 10px;
						`}
					>
						<BsChat size={19} />
					</IconBox>
					<S.Text
						css={css`
							margin-left: 3px;
						`}
					>
						{commentLen}
					</S.Text>
				</Line>
			</S.ContentBox>
		</S.Wrapper>
	)
}
export default IssueBox

const Wrapper = styled.div`
	${FlexColumnCSS}
	width: 100%;
	background-color: var(--color-light-purple);
	${ShadowCSS}
	margin: 10px 0;
	border-radius: 10px;
	padding: 20px;
	${HoverCSS}
	:hover {
		background-color: var(--color-purple);
	}
	@media screen and (max-width: 830px) {
		padding: 8px;
		padding-top: 20px;
	}
`

const ContentBox = styled.div`
	padding: 0 40px;
	margin-top: 20px;
	font-size: 14px;
`
const Text = styled.div`
	font-size: 18px;
`
const SmallText = styled.div`
	font: 14px;
`
const BoldText = styled(Text)`
	font-weight: bold;
	width: 10%;
	@media screen and (max-width: 1500px) {
		font-size: 16px;
	}
	@media screen and (max-width: 770px) {
		font-size: 14px;
	}
`
const Title = styled(Text)`
	font-weight: bold;
	width: 90%;
`

const S = {
	Wrapper,
	ContentBox,
	Text,
	SmallText,
	Title,
	BoldText,
}

/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useEffect } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import Loading from '../../Components/Loading'
import { getAnIssue } from '../../Stores/issue'
import { FlexAlignCSS, FlexColumnCSS } from '../../Styles/common'

const COLORS = ['orange', 'yellow', 'pink', 'aqua', 'coral', 'lightgreen']

function DetailPage() {
	const { owner, repository, number } = useParams()
	const anIssue = useSelector(store => store.anIssue.issue)
	const getAnIssueState = useSelector(store => store.anIssue.getAnIssueState)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAnIssue({ owner, repository, number }))
	}, [])

	return (
		<>
			{getAnIssueState.loading ? (
				<Loading />
			) : (
				<S.Wrapper>
					<S.Container>
						<S.Number># {anIssue.number}</S.Number>
						<S.Title>{anIssue.title}</S.Title>
						<S.Line>
							<S.Box>
								<ReactMarkdown remarkPlugins={[remarkGfm]}>
									{anIssue.body}
								</ReactMarkdown>
							</S.Box>
							<S.SideBox>
								<S.Text>
									<strong>Assignees</strong>
									<br />{' '}
									{anIssue.assignee ? anIssue.assignee : 'No one assigned'}
								</S.Text>
								<S.Text>
									<strong>Labels</strong>
									<br />
									{anIssue.labels && anIssue.labels.length > 0
										? anIssue.labels.map(label => (
												<S.ItemBox>
													<S.Item
														color={
															COLORS[Math.floor(Math.random() * COLORS.length)]
														}
													>
														{label.name}
													</S.Item>
												</S.ItemBox>
										  ))
										: 'None yet'}
								</S.Text>
								<S.Text>
									<strong>Projects</strong>
									<br />
									{anIssue.projects ? anIssue.projects : 'None yet'}
								</S.Text>
							</S.SideBox>
						</S.Line>
					</S.Container>
				</S.Wrapper>
			)}
		</>
	)
}
export default DetailPage

const Wrapper = styled.div`
	width: 100%;
	${FlexColumnCSS}
	align-items: center;
`
const Container = styled.div`
	width: 70%;
	${FlexColumnCSS}
	padding-top: 40px;
	@media screen and (max-width: 1700px) {
		width: 90%;
	}
`

const Title = styled.div`
	font-weight: bold;
	width: 100%;
	font-size: 28px;
	padding-bottom: 18px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	@media screen and (max-width: 700px) {
		font-size: 20px;
	}
`

const Number = styled.span`
	font-size: 20px;
	margin-bottom: 18px;
`

const Line = styled.div`
	margin-top: 20px;
	${FlexAlignCSS}
	align-items: flex-start;
`

const Box = styled.div`
	width: 80%;
	border: 1px solid var(--color-purple);
	background-color: var(--color-light-purple);
	border-radius: 20px;
	margin-right: 30px;
	padding: 20px;
	@media screen and (max-width: 1700px) {
		width: 100%;
	}
	@media screen and (max-width: 700px) {
		font-size: 14px;
	}
`

const SideBox = styled.div`
	width: 15%;
	${FlexColumnCSS}
	@media screen and (max-width: 1700px) {
		display: none;
	}
`

const Text = styled.div`
	width: 100%;
	font-size: 14px;
	padding-bottom: 10px;
	margin-top: 20px;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[300]};
`

const ItemBox = styled.div`
	${FlexAlignCSS}
	flex-wrap: wrap;
`
const Item = styled.div`
	background-color: ${({ color }) => color};
	border-radius: 8px;
	padding: 1px 5px;
	margin-top: 3px;
	margin-right: 3px;
`

const S = {
	Wrapper,
	Container,
	Title,
	Line,
	Number,
	Box,
	SideBox,
	ItemBox,
	Item,
	Text,
}

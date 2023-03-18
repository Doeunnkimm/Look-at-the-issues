import styled from '@emotion/styled'
import { FlexAlignCSS, HoverCSS } from '../../Styles/common'
import { BiSearchAlt } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { searchActions } from '../../Stores/search'
import { useNavigate } from 'react-router-dom'

function Header() {
	const dispatch = useDispatch()
	const searchText = useSelector(store => store.search.text)
	const [writeText, setWriteText] = useState('')
	const navigate = useNavigate()

	useEffect(() => {
		setWriteText(searchText)
	}, [searchText])

	const handleKeyPress = e => {
		if (e.key === 'Enter') {
			onSubmitSearchText()
		}
	}

	const onChangeSearchText = e => setWriteText(e.target.value)

	const onSubmitSearchText = () => {
		dispatch(searchActions.editSearchText(writeText))
		const splitText = writeText.split('/')
		const owner = splitText[3]
		const repository = splitText[4]
		navigate(`/${owner}/${repository}/1/created/10`)
	}

	return (
		<S.Wrapper>
			<S.Container>
				<S.Image
					onClick={() => (window.location.href = '/')}
					src={`${process.env.PUBLIC_URL}/logo.png`}
					alt="logo"
				/>
				<S.Text>
					이슈를
					<br />
					보넷
				</S.Text>
				<S.InputBox>
					<S.Input
						value={writeText}
						onChange={onChangeSearchText}
						placeholder="깃허브 레포지토리 주소를 복붙하세요 !"
						onKeyDown={handleKeyPress}
					/>
					<S.IconBox onClick={onSubmitSearchText}>
						<BiSearchAlt size={40} />
					</S.IconBox>
				</S.InputBox>
			</S.Container>
		</S.Wrapper>
	)
}
export default Header

const Wrapper = styled.div`
	width: 100%;
	padding: 10px 0;
	border-bottom: 2px solid ${({ theme }) => theme.PALETTE.gray[200]};
`
const Container = styled.div`
	width: 60%;
	${FlexAlignCSS}
	margin: 0 auto;
	padding: 5px;
`
const Image = styled.img`
	width: 10%;
	${HoverCSS}
	@media screen and (max-width: 1040px) {
		width: 20%;
	}
	@media screen and (max-width: 820px) {
		width: 22%;
	}
	@media screen and (max-width: 700px) {
		width: 27%;
	}
`
const Text = styled.div`
	font-size: 20px;
	font-weight: bold;
	color: var(--color-dark-blue);
	@media screen and (max-width: 1040px) {
		display: none;
	}
`
const InputBox = styled.div`
	border-radius: 30px;
	width: 80%;
	margin-left: auto;
	border: 3px solid var(--color-purple);
	padding: 12px;
	padding-left: 35px;
	${FlexAlignCSS}
	justify-content: space-between;
`
const Input = styled.input`
	font-size: 24px;
	font-weight: bold;
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	width: 100%;
`
const IconBox = styled.div`
	margin-right: 10px;
	${HoverCSS}
`

const S = {
	Wrapper,
	Container,
	Image,
	InputBox,
	Input,
	Text,
	IconBox,
}

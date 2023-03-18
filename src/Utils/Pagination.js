/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'

import styled from '@emotion/styled'
import { FlexCenterCSS, HoverCSS } from '../Styles/common'
import {
	MdKeyboardArrowLeft,
	MdKeyboardArrowRight,
	MdKeyboardDoubleArrowLeft,
	MdKeyboardDoubleArrowRight,
} from 'react-icons/md'
import { css } from '@emotion/react'

function Pagination({ totalPage, limit, page, setPage }) {
	const [currentPageArray, setCurrentPageArray] = useState([])
	const [totalPageArray, setTotalPageArray] = useState([])

	const setPageAndMoveToTop = go => {
		setPage(go)
		window.scrollTo({ top: 0, behavior: 'auto' })
	}

	const sliceArrayByLimit = (total, lim) => {
		const pageList = []
		for (let i = 0; i < total; i++) pageList.push(i)

		const slicedArray = []
		for (let i = 0; i < pageList.length; i += lim) {
			slicedArray.push(pageList.slice(i, i + lim))
		}
		return slicedArray
	}

	useEffect(() => {
		if (page % limit === 1) {
			setCurrentPageArray(totalPageArray[Math.floor(page / limit)])
		} else if (page % limit === 0) {
			setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1])
		}
	}, [page])

	useEffect(() => {
		const slicedPageArray = sliceArrayByLimit(totalPage, limit)
		setTotalPageArray(slicedPageArray)
		setCurrentPageArray(slicedPageArray[Math.floor(page / 11)])
	}, [totalPage])

	return (
		<S.Wrapper>
			<S.NextButton
				onClick={() => setPageAndMoveToTop(1)}
				disabled={page === 1}
				css={css`
					@media screen and (max-width: 1200px) {
						display: none;
					}
				`}
			>
				<MdKeyboardDoubleArrowLeft size={30} />
			</S.NextButton>
			<S.NextButton
				onClick={() => setPageAndMoveToTop(page - 1)}
				disabled={page === 1}
			>
				<MdKeyboardArrowLeft size={30} />
			</S.NextButton>
			<S.ButtonsContainer>
				{currentPageArray.map(i => (
					<S.Button
						key={i + 1}
						state={page === i + 1}
						onClick={() => setPageAndMoveToTop(i + 1)}
					>
						{i + 1}
					</S.Button>
				))}
			</S.ButtonsContainer>
			<S.NextButton
				onClick={() => setPageAndMoveToTop(page + 1)}
				disabled={page === totalPage}
			>
				<MdKeyboardArrowRight size={30} />
			</S.NextButton>
			<S.NextButton
				onClick={() => setPageAndMoveToTop(totalPage)}
				disabled={page === totalPage}
				css={css`
					@media screen and (max-width: 1200px) {
						display: none;
					}
				`}
			>
				<MdKeyboardDoubleArrowRight size={30} />
			</S.NextButton>
		</S.Wrapper>
	)
}
export default Pagination

const Wrapper = styled.div`
	width: 55%;
	margin: 100px auto;
	margin-bottom: 50px;
	${FlexCenterCSS}
	@media screen and (max-width: 1200px) {
		width: 70%;
	}
`
const IconBox = styled.button``

const ButtonsContainer = styled.div`
	width: 80%;
	${FlexCenterCSS}
	margin: 0 auto;
	@media screen and (max-width: 1200px) {
		width: 50%;
	}
`
const Button = styled.button`
	background-color: var(--color-pink);
	min-width: 8%;
	font-size: 18px;
	height: 40px;
	font-weight: bold;
	border-radius: 5px;
	margin: 0 3px;
	opacity: ${({ state }) => (state ? '1' : '0.5')};
	:hover {
		cursor: pointer;
		opacity: 1;
	}
	@media screen and (max-width: 1200px) {
		background-color: ${({ theme }) => theme.PALETTE.white};
	}
	@media screen and (max-width: 670px) {
		font-size: 12px;
	}
`
const NextButton = styled.button`
	height: fit-content;
	border-radius: 5px;
	width: 5%;
	${HoverCSS}
	@media screen and (max-width: 1200px) {
		background-color: ${({ theme }) => theme.PALETTE.white};
	}
`

const S = { Wrapper, IconBox, ButtonsContainer, Button, NextButton }

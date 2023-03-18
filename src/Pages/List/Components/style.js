import styled from '@emotion/styled'
import { FlexAlignCSS, HoverCSS } from '../../../Styles/common'

const Wrapper = styled.div`
	width: 15%;
	padding: 10px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	${FlexAlignCSS}
	justify-content: space-between;
	@media screen and (max-width: 1700px) {
		border: none;
		width: auto;
		justify-content: flex-start;
	}
`
const Text = styled.div`
	font-weight: bold;
	color: ${({ state }) => state && 'var(--color-blue)'};
	padding: 8px;
	${HoverCSS}
	@media screen and (max-width: 1700px) {
		font-size: 14px;
	}
`
const IconBox = styled.div`
	margin-top: 3px;
	${HoverCSS}
`

const FilterSpreadBox = styled.div`
	position: absolute;
	top: 58px;
	width: 15%;
	display: ${({ state }) => !state && 'none'};
	flex-direction: column;
	background-color: ${({ theme }) => theme.PALETTE.white};
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
	@media screen and (max-width: 1700px) {
		width: auto;
	}
	@media screen and (max-width: 1500px) {
		font-size: 14px;
	}
`

export const S = { Wrapper, Text, IconBox, FilterSpreadBox }

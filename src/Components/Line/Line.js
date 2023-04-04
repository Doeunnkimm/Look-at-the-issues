import * as S from './Line.style'

function Line(props) {
	const { children, ...rest } = props
	return <S.Line {...rest}>{children}</S.Line>
}
export default Line

import * as S from './IconBox.style'

function IconBox(props) {
	const { children, ...rest } = props
	return <S.IconBox {...rest}>{children}</S.IconBox>
}
export default IconBox

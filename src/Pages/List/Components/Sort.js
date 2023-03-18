/** @jsxImportSource @emotion/react */
import { S } from './style'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SortBox({ setGoPage }) {
	const [choice, setChoice] = useState('')
	const navigate = useNavigate()
	const [isOpenFilter, setIsOpenFilter] = useState(false)
	const { owner, repository, sort, per_page } = useParams()
	const onOpenFilter = () => setIsOpenFilter(prev => !prev)

	const onClickSortFilter = filter => {
		setGoPage(1)
		navigate(`/${owner}/${repository}/1/${filter}/${per_page}`)
	}

	useEffect(() => {
		setIsOpenFilter(false)
		if (sort === 'created') setChoice('생성순')
		if (sort === 'updated') setChoice('업데이트순')
		if (sort === 'comments') setChoice('댓글순')
	}, [sort, per_page])

	return (
		<>
			<S.Wrapper onClick={onOpenFilter}>
				<S.Text>{choice}</S.Text>
				<S.IconBox>
					<MdOutlineKeyboardArrowDown size={20} />
				</S.IconBox>
			</S.Wrapper>
			<S.FilterSpreadBox state={isOpenFilter}>
				<S.Text
					state={sort === 'created'}
					onClick={() => onClickSortFilter('created')}
				>
					생성순
				</S.Text>
				<S.Text
					state={sort === 'updated'}
					onClick={() => onClickSortFilter('updated')}
				>
					업데이트순
				</S.Text>
				<S.Text
					state={sort === 'comments'}
					onClick={() => onClickSortFilter('comments')}
				>
					댓글순
				</S.Text>
			</S.FilterSpreadBox>
		</>
	)
}
export default SortBox

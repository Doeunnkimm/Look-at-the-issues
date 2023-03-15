/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FlexColumnCSS, HoverCSS, ShadowCSS } from '../../../Styles/common';
import remarkGfm from 'remark-gfm';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function IssueBox({ number, title, body }) {
  return (
    <S.Wrapper>
      <S.LineContainer>
        <S.BoldText>{number}</S.BoldText>
        <S.Title
          css={css`
            margin-left: 20px;
          `}
        >
          {title}
        </S.Title>
      </S.LineContainer>
      <S.ContentBox>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
      </S.ContentBox>
    </S.Wrapper>
  );
}
export default IssueBox;

const Wrapper = styled.div`
  ${FlexColumnCSS}
  width: 100%;
  background-color: var(--color-light-purple);
  ${ShadowCSS}
  margin: 10px 0;
  border-radius: 10px;
  padding: 20px;
  ${HoverCSS}
`;
const LineContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
const ContentBox = styled.div`
  padding: 0 40px;
  margin-top: 20px;
  font-size: 14px;
`;
const Text = styled.div`
  font-size: 18px;
`;
const BoldText = styled(Text)`
  font-weight: bold;
  width: 10%;
`;
const Title = styled(Text)`
  font-weight: bold;
  color: ${({ theme }) => theme.PALETTE.gray[300]};
`;

const S = { Wrapper, LineContainer, ContentBox, Text, Title, BoldText };

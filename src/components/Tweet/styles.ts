import styled, { css } from 'styled-components';

import { Chat, Favorite, Reply } from "../../styles/icons";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 14px 16px;

    border-bottom: 1px solid var(--outline);

    max-width: 100%;
`;

export const Retweeted = styled.div`
    display: flex;
    align-items: center;

    font-size: 12px;
    color: var(--gray);
`;

export const Body = styled.div`
    display: flex;
    margin-top: 4px;
    position: relative;
`;

export const Avatar = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    
    flex-shrink: 0;
    
    background: var(--gray);

    position: absolute;
    top: 0;
    left: 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    margin-top: 2px;
    padding-left: 56px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    font-size: 16px;
    white-space: nowrap;

    > strong {
        margin-right: 6px;
    }

    > span, time {
        color: var(--gray);
    }

    > strong, span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export const Dot = styled.div`
  background: var(--gray);

  width: 2px;
  height: 2px;

  border-radius: 50%;

  margin: 0 10px;
`;

export const Description = styled.p`
    font-size: 14px;
    margin-top: 4px;
`;

export const Image = styled.div`
    margin-top: 12px;
    width: 100%;
    height: min(286px, max(176px, 42vw));

    background: var(--outline);
    border-radius: 14px;

    &:hover {
        opacity: .8;
    }
`;

export const Icons = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 11px auto 0;
    width: 100%;

    @media(min-width: 330px) {
        width: 64%;
    }

    > div {
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
`;

export const Status = styled.div`
    display: flex;
    align-items: center;

    font-size: 14px;

    > svg path {
        margin-right: 4px;
        color: var(--gray);
    }
`;

const iconCSS = css`
    width: 18px;
    height: 18px;
`;

export const CommentIcon = styled(Chat)`
    ${iconCSS}
`;
export const RetweetIcon = styled(Reply)`
    ${iconCSS}
`;
export const LikeIcon = styled(Favorite)`
    ${iconCSS}
`;

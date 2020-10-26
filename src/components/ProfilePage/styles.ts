import styled, { css } from "styled-components";
import { LocationOn, Cake } from "../../styles/icons";
import Button from "../Button";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }

`;
export const Banner = styled.div`
    flex-shrink: 0;

    width: 100%;
    height: min(33vw, 199px);

    position: relative;

    background: var(--twitter);
` ;

export const Avatar = styled.div`
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    border: 3.75px solid var(--primary);
    background: var(--gray);
    border-radius: 50%;

    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
`;

export const ProfileData = styled.div`
    padding: min(calc(10vw + 7px), 67px) 16px 0;

    display: flex;
    flex-direction: column;

    position: relative;

    > h1 {
        font-weight: bold;
        font-size: 19px;
    }

    > h2 {
        font-weight: normal;
        font-size: 16px;

        color: var(--gray);
    }

    > p {
        font-size: 16px;
        margin-top: 11px;

        > a {
            text-decoration: none;
            color: var(--twitter);
        }
    }

    > ul {
        margin-top: 10px;
        margin-bottom: 10px;

        > li {
            font-size: 16px;
            color: var(--gray);

            > svg {
                fill: var(--gray);
                margin-right: 4px;
            }
        }

    }


`; 

const iconsCSS = css`
    width: 20px;
    height: 20px;

    color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
    ${iconsCSS}
`; 
export const CakeIcon = styled(Cake)`
    ${iconsCSS}
` ;

export const Followage = styled.div`
    display: flex;

    > span {
        margin: 4px 0;
        font-size: 16px;
        color: var(--gray);

        & + span {
            margin-left: 20px;
        }
    }
`;

export const EditButton = styled(Button)`
    position: absolute;
    top: 2vw;
    right: 8px;

    padding: 4px 16px;
    font-size: 13px;

    @media(min-width: 320px) {
        top: 10px;
        padding: 10px 19px;
        font-size: 16px;
    }
`;
import React from 'react';

import {
    Container,
    Retweeted,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    Image,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from "./styles";

const Twitter: React.FC = () => {
    return (
        <Container>
            <Retweeted>
                Você retweetou
           </Retweeted>

            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>João Paulo</strong>
                        <span>@jp15_thinker</span>
                        <Dot />
                        <time>26 de out</time>
                    </Header>
                    <Description>
                        ReactJS is awesome!
                    </Description>
                    <Image />
                    <Icons>
                        <Status>
                            <CommentIcon />
                            10
                        </Status>
                        <Status>
                            <RetweetIcon />
                            10
                        </Status>
                        <Status>
                            <LikeIcon />
                            10
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
};

export default Twitter;

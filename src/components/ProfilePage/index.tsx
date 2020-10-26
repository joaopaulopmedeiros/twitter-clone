import React from "react";

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from "./styles";

import Feed from "../Feed";

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>
            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
                <h1>João Paulo Medeiros</h1>
                <h2>@jp15_thinker</h2>
                <p>Always studying</p>
                <ul>
                    <li>
                        <LocationIcon />
                        Rio Grande do Norte, Brasil.
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em em 15 de maio de 2001
                    </li>

                    <Followage>
                        <span>
                            seguindo <strong>10</strong>
                        </span>
                        <span>
                            <strong>10</strong> seguidores
                        </span>
                    </Followage>
                </ul>
            </ProfileData>

            <Feed />

        </Container>
    )
}

export default ProfilePage;
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../Components/Loader";
import Post from "../Components/Post";

const FEED_QUERY = gql `
{
    viewFeed {
        id
        location
        caption
        user {
            id
            avatar
            username
        }
        files {
            id
            url
        }
        likes {
            id
            user {
                id
                avatar
                username
            }
        }
        likeCount
        isLiked
        comments {
            id
            text
            user {
                id
                username
            }
        }
        createdAt
    }
}
`;

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 70vh;
`;

export default () => {
    const { data, loading } = useQuery(FEED_QUERY);
    return (
    <Wrapper> 
        <Helmet>
            <title>Feed | prismagram </title>
        </Helmet>    
        {loading && <Loader />}
        {!loading && 
        data && data.viewFeed && 
        data.viewFeed.map(post => (
            <Post
                key = { post.id }
                id = { post.id }
                location = { post.location }
                caption = { post.caption }
                user = { post.user }
                files = { post.files }
                likes = { post.likes }
                likeCount = { post.likeCount }
                isLiked = { post.isLiked }
                comments = { post.comments }
                createdAt = { post.createdAt }
            />   
        ))}
    </Wrapper>
    ); 
};
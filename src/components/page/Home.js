import React from 'react';
import PostsWP from './PostsWP';
import Rooms from '../Rooms/Rooms';

const Home = () => {
    return (
        <div>
            <h1>hello home</h1>
            <Rooms/>
            <PostsWP/>
        </div>
    );
};

export default Home;
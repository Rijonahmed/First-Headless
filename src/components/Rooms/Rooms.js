import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Rooms = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        let url = `${process.env.REACT_APP_API_POSTS_ROOMS}`
       
        axios.get(url)
        .then(res => {
            setPosts(res.data)});
       

        },[]);

       
    return (
        <div className='container'>
            <h1>Hello rooms type</h1>

            <div className='flex gap-5 justify-around'>
            {
              posts.map((post , i) => <div key={i}>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={post?.featured_image?.medium} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{post?.title}</h2>
                <p dangerouslySetInnerHTML={{__html: post?.content.slice(0, 40)}}></p>
                <p>{post?.excerpt}</p>
                
            </div>
            </div>
                
                
              </div>)
            }

            
            </div>
            
        </div>
    );
};

export default Rooms;

import React, { useEffect, useState } from 'react';
import axios from "axios"
/* import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './MyCard';
import "antd/dist/antd.min.css"
import AntdCard from './AntdCard'; */
import {Header,FlexDiv} from "./styled-components"


function App() {
  const [posts,setPosts]=useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(result=>setPosts(result.data))


   /*  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>setPosts(data)) */

  },[])

  return (
    <FlexDiv row={false}>
      <Header dark>My React App</Header>
     <FlexDiv row> 
     <p style={{width:"300px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus nam ipsa, veritatis dolorum maxime perferendis dolores, quam, nulla amet tenetur qui? Autem voluptatem quis sed reprehenderit fugit soluta a necessitatibus?</p>
     <p style={{width:"300px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus nam ipsa, veritatis dolorum maxime perferendis dolores, quam, nulla amet tenetur qui? Autem voluptatem quis sed reprehenderit fugit soluta a necessitatibus?</p>
     <p style={{width:"300px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus nam ipsa, veritatis dolorum maxime perferendis dolores, quam, nulla amet tenetur qui? Autem voluptatem quis sed reprehenderit fugit soluta a necessitatibus?</p></FlexDiv>

  {/*     <div >
        {posts.map(post=>{
          return ( <MyCard title={post.title} body={post.body}/>)
        })}
      </div>

      <div >
        {posts.map(post=>{
          return ( <AntdCard title={post.title} body={post.body}/>)
        })}
      </div> */}


    </FlexDiv>
  );
}

export default App;
import React, {useState} from 'react';

import './App.css';
import {UsersComponent} from "./components/UsersContainer/UsersComponent";
import {PostModel} from "./models/PostModel";
import {getPostsByUserId} from "./services/dummy.AxiosService";
import {PostsComponent} from "./components/PostsContainer/PostsComponent";




const App = () => {

    const [posts, setPosts] = useState<PostModel[]>([]);

    const postsByUserId = (userId:number)=>{
        getPostsByUserId(userId).then(({data})=>setPosts(data.posts))
    }

  return (
      <div className='app'>

          <div className='users'>
              <UsersComponent postsByUserId={postsByUserId}/>
          </div>
          <div className='posts'>
              <PostsComponent posts={posts}/>

          </div>


      </div>
  );
};

export {App};



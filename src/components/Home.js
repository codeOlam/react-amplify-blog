import React from 'react';
import 'antd/dist/antd.css';
import './home.css';
import { Breadcrumb} from 'antd';

function Home(){
  return(
    <>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <h1>Welcome to YourArticle.com</h1>
          <p>You think you can write?<br />
          Sign Up and start writing articles for free!<br/>
          And if you like reading, go to article page and read up!</p>
          <h3>To get started, create an account with us</h3>
        </div>
    </>
  )
}


export default Home
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
          <p>This site allows you to write your article and share with the would<br />
          for free</p>
          <h3>To get started, create an account with us</h3>
        </div>
    </>
  )
}


export default Home
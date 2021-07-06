import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import {HomeOutlined, BookOutlined} from '@ant-design/icons';

const Nav = (props) =>{
	const {current}=props
	return(
		<div>
			<Menu selectedKeys={[current]} mode="horizontal">
				<Menu.Item key='home'>
					<Link to={`/`}>
						<HomeOutlined />Home
					</Link>
				</Menu.Item>
				<Menu.Item key='articles'>
					<Link to={`/articles`}>
						<BookOutlined />Articles
					</Link>
				</Menu.Item>
			</Menu>
		</div>
	)
}

export default Nav
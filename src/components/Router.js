import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { Layout } from 'antd';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import Articles from './Articles';

const {Content} = Layout;

const Router = () =>{

	return(
		<HashRouter>
			<Layout className="layout">
				<Nav />
				<Switch>
					<Content style={{ padding: '0 50px' }}>
						<Route exact path="/" component={Home}/>
						<Route exact path="/articles" component={Articles}/>
					</Content>
				</Switch>
				<Footer />
			</Layout>
		</HashRouter>
	)	
}

export default Router
import React, {useState, useEffect} from 'react';
import {listArticles} from '../graphql/queries';
import {API} from 'aws-amplify';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';
import {UserOutlined} from '@ant-design/icons';


const heading = {
	fontSize: 44,
	fontWeight: 300,
	marginBottom: 5
}
const articleInfo = {
	fontWeight: 'bold',
	padding: '20px 0px 10px',
	borderBottom: '2px solid #ddd',
}
const infoHeading = {
	fontSize: 30,
	marginBottom: 5
}
const authorInfo = {
	fontSize: 14
}


function Articles(){
	const [articles, setArticles] = useState([])
	const [loading, setLoading] = useState(true)

	async function getArticles(){
		const apiData = await API.graphql({
			query: listArticles,
			authMode: 'API_KEY'
		})
		const {data: {listArticles: {items}}} = apiData
		setLoading(false)
		setArticles(items)
	}

	useEffect(()=>{
		getArticles()
	}, [])


	return(
		<>
	        <Breadcrumb style={{ margin: '16px 0' }}>
	          <Breadcrumb.Item>
	          	<Link to={`/`}>Home</Link>
	          </Breadcrumb.Item>
	          <Breadcrumb.Item>Articles</Breadcrumb.Item>
	        </Breadcrumb>
			<div className="site-layout-content">
				<h1 style={heading}>Article Feeds</h1>
				{loading && <h2>Loading...</h2>}
				{
					articles.map(article => (
						<div key={article.id} style={infoHeading}>
							<p style={articleInfo}>
							{<Link to={`/articleDetail/${article.id}`}>
								{article.title}
							 </Link>
							}
							</p>
							<p style={authorInfo}><UserOutlined/>Author: {article.author.name}</p>
							<p style={authorInfo}>{article.content}</p>
						</div>
					))
				}
			</div>
		</>
	)
}

export default Articles
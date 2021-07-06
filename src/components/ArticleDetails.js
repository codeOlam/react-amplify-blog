import React, {useState, useEffect} from 'react';
import {Breadcrumb, List} from 'antd';
import {API} from 'aws-amplify';
import {useParams} from 'react-router-dom';
import {getArticle} from '../graphql/queries';
import {Link} from 'react-router-dom';
import {CommentOutlined, UserOutlined} from '@ant-design/icons';

const heading = {
	fontSize: 44,
	fontWeight: (300, 'bold'),
	marginBottom: 5,
}

const articleInfo = {
	padding: '20px 0px 10px',
	borderBottom: '2px solid #ddd',
}

const comment = {
	fontSize: 25,
	marginTop: 20,
	marginBottom: 5,
}

const commentSection = {
	borderBottom: '.5px solid #ddd',
}

function ArticleDetail(){
	const [articleDetail, setArticleDetail] = useState(null)
	const [loading, setLoading] = useState(true)
	let {id} = useParams()

	async function fetchArticleDetail(){
		try{
			const detail = await API.graphql({
				query: getArticle,
				variables: {id},
				authMode: 'API_KEY'
			})
			setArticleDetail(detail.data.getArticle)
			setLoading(false)
		}catch(err){
			console.log('error fetching article details...', err)
			setLoading(false)
		}
	}

	useEffect(() =>{
		fetchArticleDetail()
	}, [])


	return(
		<>
	        <Breadcrumb style={{ margin: '16px 0' }}>
	          <Breadcrumb.Item>Home</Breadcrumb.Item>
	          <Breadcrumb.Item>
	          	<Link to={`/articles`}>Articles</Link>
	          </Breadcrumb.Item>
	          <Breadcrumb.Item>Articles Detail</Breadcrumb.Item>
	        </Breadcrumb>
			<div className="site-layout-content">
			{loading && <h3>Loading...</h3>}
			{
				articleDetail && (
				<>
					<div>
						<h1 style={heading}>{articleDetail.title}</h1>
						<h4>{articleDetail.author.name}</h4>
						<p style={articleInfo}>{articleDetail.content}</p>
					</div>
					<div style={commentSection}>
						<h3 style={comment}><CommentOutlined/>Comments</h3>
						<List
							itemLayout="horizontal"
							dataSource={articleDetail.comments.items}
							renderItem={
								comment=>(
									<List.Item>
										<List.Item.Meta
											title=<p><UserOutlined/> {comment.username}</p>
											description={comment.content}
										/>
									</List.Item>
								)
							}
						/>
					</div>
				</>
				)
			}
			</div>
		</>
	)
}

export default ArticleDetail
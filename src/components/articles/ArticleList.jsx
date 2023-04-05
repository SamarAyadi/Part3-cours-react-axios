import {useState} from 'react'

import axios from 'axios'

const ArticleList = () => {

    const [articles, setArticles] = useState([])

    const getAllArticles = async() => {
        const response = await axios.get("http://localhost:4000/articles")
        setArticles(response.data )
    }
    return (
      <div>
        <h1>List of articles</h1>
            <button onClick={getAllArticles} className="btn btn-success" > Get All</button>
            {articles.map(article => (
                <div key={article.id}>
                <h1>{article.title}</h1>
                    <p>{article.description}</p>
                 </div>
            ))}
     </div>
  )
}

export default ArticleList
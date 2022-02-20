import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'
const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
       {articles.map((articles) => (
       // eslint-disable-next-line react/jsx-key
       <ArticleItem article={articles} />
      ))}


    </div>
  )
}

export default ArticleList
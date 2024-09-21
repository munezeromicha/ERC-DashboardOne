import Layout from "./Layout"
import RichTextEditor from "../components/RichTextEditor/RichTextEditor"

function NewArticles() {
  const handleArticleSubmit  = (content: string) => {
    console.log('Article content:', content);
  }
  return (
    <div className="flex">
    <Layout />
    <RichTextEditor onSubmit={handleArticleSubmit}/>
  </div>
  )
}

export default NewArticles
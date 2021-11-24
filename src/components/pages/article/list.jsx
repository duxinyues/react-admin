import './list.css';
export default function ArticleList() {
    fetch(`127.0.0.1:3003/atricle/list?page=1&pageSize=10`, {
        method: "GET",
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
          // 'Content-type':'application/json'
        }
    })
        .then(res => { return res.json() })
        .then(res => {
            console.log(res)
        })
    return <div className="article-list">
        文章列表
    </div>
}
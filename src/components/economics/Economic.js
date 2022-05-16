import React,{useEffect,useState} from 'react'
import "../economics/Economic.css"
function Economic() {
    const [news, setnews] = useState([])
    
    useEffect(() => {
        const Apikey="fea5587a2bc24f31b14228e9c7b8c4a9" 
            fetch(`https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=${Apikey}`)
          .then(rs => rs.json())
          .then(response => {
    setnews(response.articles)
    
          })
          .catch(err => {
            console.error(err);
          });          
          },[])
          console.log(news);
    const hold = news.map((elem, index) => {
        if (elem.author !== null && elem.content !== null && elem.description !== null && elem.urlToImage !== null) {
            return <div className="newsholder3" key={index}>
                <div className="left31" >
                    <h5>Article by:{elem.author}</h5>
                    <h6>Headline: {elem.content}</h6>
                    <p>{elem.description}</p>
                </div>
                <div className="right3" >
                    <img src={elem.urlToImage} alt="" />
                </div>
            </div>
        }
    })
 
    return (
    <>
    <div className="left3">
                {news.length > 0 ? hold : <h1>Loading......</h1>
                }

            </div>
    
    </>
  )
}

export default Economic
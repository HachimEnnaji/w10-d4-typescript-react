// Articles.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticlesRequest, fetchArticlesSuccess, fetchArticlesFailure } from "../redux/reducers/fetchData";
import { RootState } from "../redux/store/store";
import { ArticleType } from "../interfaces/BookInterface";
import { useNavigate } from "react-router-dom";

const Articles: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { articles, loading, error } = useSelector((state: RootState) => state.fetchArticles);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchArticlesRequest());

        const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=100");
        const data = await response.json();

        dispatch(fetchArticlesSuccess(data.results));
      } catch (error: any) {
        dispatch(fetchArticlesFailure(error.message));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="text-center p-5">Scientist Articles</h1>
      {loading && <p>Caricamento in corso...</p>}
      {error && <p>Errore: {error}</p>}
      {articles &&
        articles.map((article: ArticleType) => (
          <div
            key={article.id}
            className="d-flex border rounded-2 link mb-4"
            onClick={() => navigate(`/details/${article.id}`)}
          >
            <div
              className="me-3"
              style={{
                minWidth: "80px",
                minHeight: "80px",
                backgroundImage: `url(${article.image_url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="d-flex flex-column align-items-start">
              <h2 className="fs-4 text-left">{article.title}</h2>

              <p className="ps-2">{article.news_site}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Articles;

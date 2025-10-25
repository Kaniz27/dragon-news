import { set } from "date-fns/fp";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  useEffect(() => {
    if(id=='0'){
        setCategoryNews(data);
        return;
    } else if(id=='1'){
const filteredNews = data.filter((news) => news.others.is_today_pick==true);
setCategoryNews(filteredNews)
    
    }else{
const filteredNews = data.filter((news) => news.category_id == id);
    console.log(filteredNews);
    setCategoryNews(filteredNews);
    }
    
  }, [data, id]);
   return <div>Total{categoryNews.length}News Foun</div>

  // console.log(id,data);

  return <div>category -{id}</div>;
};

export default CategoryNews;

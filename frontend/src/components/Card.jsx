import { data } from "../libs/constant.js";

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-5 w-full py-4 px-7">
      {data.articles.map((article, index) => (
        <div
          key={index}
          className="border-2 p-4 rounded-lg cursor-pointer hover:bg-slate-100"
        >
          <img className="rounded-md" src={article.image} alt={article.title} />
          <div className="font-bold text-xl py-2">
            <h1>{article.title}</h1>
          </div>
          <div>
            <p>{article.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

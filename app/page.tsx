import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button"; 

const getData = async () => {
  const res = await fetch("http://localhost:4000/articles");
  const data = await res.json()
  return data
}

type Article = {
  id: number;
  titre: string;
  contenu: string;
  auteur: string;
  date: string;
  user_id: number;
};

export default async function Home() {

  const articles = await getData()

  console.log(articles)
   

  return (
    <main className="">
      <h2>Bienvenue </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, magnam ipsa, nesciunt adipisci aut itaque nam quidem esse optio maiores et. Esse nisi quidem eaque harum eligendi aliquam autem ullam?</p>

      
      <Button />
      
      <div className="container">
        {articles.map((article:Article) => (
          <div className="carte" key={article.id}>
            <h3>{article.id} </h3>
            <p>{article.titre} </p>

          </div>
        ))}
      </div>

      <Link href='/connexion' > Connectez vous </Link>
      <Link href='/article'>Articles</Link>
    </main>
  );
}

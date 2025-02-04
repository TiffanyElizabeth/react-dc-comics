import comics from "../data/comics";
import ComicCard from "./ComicCard";

export default function ComicsList() {
    return (
        <section>
            <div className="comics-row">
                {comics.map((comic) => {
                    return (
                        <div className="comics-col" key={comic.id}>
                            <ComicCard thumb={comic.thumb} title={comic.title} />
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
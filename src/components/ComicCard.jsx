export default function ComicCard({ title, thumb }) {
    return (
        <div className="comic-card">
            <div className="comic-thumb">
                <img src={thumb} alt={title} />
            </div>
            <h2>{title}</h2>
        </div>
    );
}
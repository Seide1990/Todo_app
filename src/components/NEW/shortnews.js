import styles from './css/short-news.module.css';

export default function ShortNews ({
    title,
    image,
    visitCount,
    likesCount,
    dislikesCount
}) {

    return (
        <a href=''>
            <div className={styles.shortNews}>
                <img alt={title} src={image} className={styles.image} />
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.newsCardFooter}>
                    <div className={styles.likes}>likes: {likesCount}</div>
                    <div className={styles.dislikes}>dis: {dislikesCount}</div>
                    <div className={styles.visitCount}>visit: {visitCount}</div>
                </div>
            </div>
        </a>
    );
}
import styles from './css/single-news.module.css';

export default function SingleNews ({
    title,
    publishDate,
    image,
    content,
    visitCount,
    likesCount,
    dislikesCount
}) {

    return (
        <div className={styles.singleNews}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.infoBar}>
                <time className={styles.publishDate}>Dərc edilib: {publishDate}</time>

                <div className={styles.likes}>Bəyənilib: {likesCount}</div>
                <div className={styles.dislikes}>Bəyənilməyib: {dislikesCount}</div>

                <div className={styles.visitCount}>baxış sayı: {visitCount}</div>
            </p>
            <p className={styles.content}>
                <img alt={title} src={image} className={styles.image} />
                {content}
            </p>
        </div>
    );
}
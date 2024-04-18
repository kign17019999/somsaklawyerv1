import styles from "./Findout.module.css"

const Findout = () => {
    const redirectTo = () => {
        window.location.href = "https://line.me/ti/p/Gy1h6tM1LQ";
    };
    return (
        <section className={styles.findout}>
            <h3 className={styles.title}>รับว่าความทั่วราชอาณาจักรไทย</h3>
            <button className={styles.btn} onClick={redirectTo}>ติดต่อเรา</button>
        </section>   
    )
}

export default Findout
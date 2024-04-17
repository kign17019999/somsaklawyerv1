import styles from "./Findout.module.css"

const Findout = () => {
    return (
        <section className={styles.findout}>
            <h3 className={styles.title}>รับว่าความทั่วราชอาณาจักรไทย</h3>
            <button className={styles.btn}>ติดต่อเรา</button>
        </section>   
    )
}

export default Findout
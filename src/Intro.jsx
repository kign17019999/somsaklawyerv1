import styles from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={styles.intro}>
            <picture className={styles.intro_img}>
            <source 
                srcSet="images/father1.png"
                media="(min-width: 1024px)"/>
            <img 
                src="images/father1.png"
                alt=""
                aria-hidden="true" />
            </picture>
            <div className={styles.intro_content}>
            <h1 className={styles.title}>ทนายสมศักดิ์</h1>
            <p className={styles.description}>
                ให้คำปรึกษาทางด้านกฤหมาย คดีอาญา คดีแพ่ง คดีแรงงาน  
                คดีปกครอง ฟ้อง แก้ต่าง การบังคับคดีครบวงจร
            </p>
            <button className={styles.view_plans_btn}>ติดต่อเรา</button>
            </div>
        </div>
    )
}

export default Intro
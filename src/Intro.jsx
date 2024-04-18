import styles from "./Intro.module.css";

const Intro = () => {
    const redirectTo = () => {
        window.location.href = "https://line.me/ti/p/Gy1h6tM1LQ";
    };
    return (
        <div className={styles.intro}>
            <picture className={styles.intro_img}>
                <source 
                    srcSet="images/father2.jpg"
                    media="(min-width: 1024px)"/>
                <img 
                    src="images/father2.jpg"
                    alt=""
                    aria-hidden="true" />
            </picture>
            <div className={styles.intro_content}>
            <h1 className={styles.title}>ทนายสมศักดิ์</h1>
            <p className={styles.description}>
                ให้คำปรึกษาทางด้านกฎหมาย คดีอาญา คดีแพ่ง คดีแรงงาน  
                คดีปกครอง ฟ้อง แก้ต่าง การบังคับคดีครบวงจร
            </p>
            <button className={styles.view_plans_btn} onClick={redirectTo}>ติดต่อเรา</button>
            </div>
        </div>
    )
}

export default Intro
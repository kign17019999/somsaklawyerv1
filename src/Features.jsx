import styles from "./Features.module.css"

const Features = () => {

    // eslint-disable-next-line react/prop-types
    function IconTitleText({ icon, title, text }) {
        return (
            <div className={styles.feature}>
                <img 
                    src={icon} 
                    alt=""
                    aria-hidden="true" 
                    className={styles.icon}
                />
                <p className={styles.subtitle}>{title}</p>
                <p className={styles.description}>{text}</p>
            </div>
        );
    }

    return (
        <section className={styles.features}>
            <h2 className={styles.title}>ทำไมถึงต้องเป็นทนายสมศักดิ์</h2>
            <div className={styles.wrapper}>
                <IconTitleText 
                    icon={"images/icon-exp.png"}
                    title={"มากประสบการณ์"}
                    text={
                        "พนักงานสอบสวนมามากกว่า 30 ปี"
                    }
                />
                <IconTitleText 
                    icon={"images/icon-call.png"}
                    title={"ใส่ใจทุกขั้นตอน"}
                    text={
                        "ละเอียด รอบคอบ ใส่ใจทุกรายละเอียด"
                    }
                />
                <IconTitleText 
                    icon={"images/icon-judge.png"}
                    title={"ยุติธรรม"}
                    text={
                        "คุณธรรมยืนหนึ่ง"
                    }
                />
            </div>
        </section>
    )
}

export default Features
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div>
        <div className={styles.navbar}>
            <div className={styles.ok}>
            <div className={styles.left}>
                WEESTEP
            </div>
            <div className={styles.center}>
                <a className={styles.A} href="">About</a>
                <a className={styles.A} href="">Catolog</a>
                <a className={styles.A} href="">Sotib olish</a>
                <a className={styles.A} href="">Blog</a>
                <a className={styles.A} href="">Contact</a>
                <a className={styles.A} href="">Qidirish</a>
                <a className={styles.a1} href="">Yap</a>
            </div>
            </div>
           
        </div>
<div className={styles.bac}>
        <div className={styles.bg}>
            <h1 className={styles.x1}>BE BIGGER</h1>
        </div>
        </div>
    </div>
  )
}

export default Navbar
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div>
        <h1 className={styles.x1}>Qayerdan olish</h1>
        <img className={styles.img} src="bulga1.jpg" alt="" />
        <img className={styles.img} src="bulga2.jpg" alt="" />


        <div className={styles.Footer}>
            <div className={styles.left}>Weestep</div>
            <div className={styles.center}>
                <div className={styles.cleft}>About <br />Blog <br />Cotolog <br /> Qayerdan olish <br />Contactlar <br />fitingni top</div>
                <div className={styles.cright}>tiktok <br />Instagram <br />Facebook <br />Youtube</div>
            </div>
            <div className={styles.right}>private policy <br />terms & condition</div>
        </div>



    </div>
  )
}

export default Footer
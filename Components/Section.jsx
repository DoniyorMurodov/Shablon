import styels from "../styles/Section.module.css"

const Section = () => {
  return (
    <div>
        <div className={styels.big}>
            <div className={styels.left}>Hi, <br /> we are <br /> Weestep </div>
            <div className={styels.right}><img src="two.jpg" alt="" /></div>
        </div>


        <div className={styels.big1}>
            <div className={styels.left}>Why <br /> WeeStep <br /> Lorem ipsum  dolor <br /> sit amet.</div>
            <div className={styels.right}><img src="photo_2024-10-05_14-58-05.jpg" alt="" /></div>
        </div>


<img className={styels.img} src="img.jpg" alt="" />


<h1 className={styels.left1}>New Collection</h1>


<div className="cerd">
    <img className={styels.right1} src="new1.jpg" alt="" />
    <button className={styels.btn}>Bollar Uchun</button>
</div>

<div className={styels.cerd}>
    <img className={styels.right2} src="new2.jpg" alt="" />
    <button className={styels.btn1}>Bollar Uchun</button>
</div>

    </div>
  )
}

export default Section
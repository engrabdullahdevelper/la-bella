import {useState} from "react";
function Menu(props) {
    const [orderid, setOrderid] = useState(null);
   
    return(
      <section className="menu-section" id="menu">
  <div className="menu-grid">
    {props.items.map((item) => (
      <div className="menu-card" key={item.id}>
        <img src={item.img} alt={item.title} />
        <div className="menu-card-body">
          <p className="menu-card-tag">{item.tag}</p>
          <h3   className="menu-card-title">{item.title}</h3>
          <p className="menu-card-desc">{item.desc}</p>
        </div>
        <div className="menu-card-footer">
          <span className="price">{item.price}</span>
          <button className="order-btn" onClick={() => setOrderid(item.id)}
            >{orderid === item.id ? "Added ✓" : "Order"}</button>
        </div>
      </div>
    ))}
   </div>
   </section>
    );
}

export default Menu;
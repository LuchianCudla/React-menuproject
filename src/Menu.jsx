const Menu = ({ items }) => {
  return (
    <div className="section-container">
      {items.map(({ id, title, img, desc, price }) => {
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} />
            <div className="item-info">
              <div className="title-price">
                <h4>{title}</h4>
                <p className="price">${price}</p>
              </div>
              <p className="item-description">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

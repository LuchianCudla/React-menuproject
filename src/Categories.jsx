const Categories = ({ filterCategory, categories }) => {
  return (
    <div className="btns-container">
      {categories.map((btn, index) => {
        return (
          <button
            key={index}
            className="category-btn"
            onClick={() => filterCategory(btn)}
          >
            {`${btn[0].toUpperCase()}${btn.slice(1)}`}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

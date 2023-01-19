import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

export default function Directory({ categories }) {
  function renderCategories() {
    return categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ));
  }
  return <div className="directory-container">{renderCategories()}</div>;
}

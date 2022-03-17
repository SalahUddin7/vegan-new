//NPM Packages
import { useParams, Link } from 'react-router-dom';

//Project File
import categories from '../data/categories.json';

export default function Category() {
  const { categoryId } = useParams();

  //Properties
  const category = categories.find((item) => item.categoryId === categoryId);

  if (category === undefined) return <Link to="/">Menu NOT FOUND</Link>;

  return (
    <div id="category">
      <h1>This is Category Page</h1>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
    </div>
  );
}

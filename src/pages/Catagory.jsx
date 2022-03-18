//NPM Packages
import { useParams } from 'react-router-dom';

//Project File
import ErrorMessageDisplay from '../components/ErrorMessageDisplay';
import categories from '../data/categories.json';

export default function Category() {
  const { categoryId } = useParams();

  //Properties
  const category = categories.find((item) => item.categoryId === categoryId);

  if (category === undefined) return <ErrorMessageDisplay />;

  return (
    <div id="category">
      <h1>This is Category Page</h1>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
    </div>
  );
}

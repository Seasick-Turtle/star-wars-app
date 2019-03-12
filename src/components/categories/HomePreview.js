import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useHomeResources from '../../hooks/useHomeResources';

const displayListItem = (category, detail, property) => {

  let previewData = category[property];

  return (
    <Fragment>
      { `${detail}: ${previewData}` }
    </Fragment>
  );
};

const displayPreview = (resource, category) => {
  switch (resource) {
    case 'people':
      return (
        <Fragment>
          <li>
            { displayListItem(category, 'Birth Year', 'birth_year')}
          </li>
          <li>
            { displayListItem(category, 'Homeworld', 'homeworld')}
          </li>
          <li>
            { displayListItem(category, 'Gender', 'gender')}
          </li>
        </Fragment>
      );
    case 'planets':
      return (
        <Fragment>
          <li>
            { displayListItem(category, 'Climate', 'climate')}
          </li>
          <li>
            { displayListItem(category, 'Terrain', 'terrain')}
          </li>
          <li>
            { displayListItem(category, 'Population', 'population')}
          </li>
        </Fragment>
      );
    case 'species':
      return (
        <Fragment>
          <li>
            { displayListItem(category, 'Classification', 'classification')}
          </li>
          <li>
            { displayListItem(category, 'Average Lifespan', 'average_lifespan')}
          </li>
          <li>
            { displayListItem(category, 'Homeworld', 'homeworld')}
          </li>
        </Fragment>
      );
    case 'vehicles':
      return (
        <Fragment>
          <li>
            { displayListItem(category, 'Model', 'model')}
          </li>
          <li>
            { displayListItem(category, 'Manufacturer', 'manufacturer')}
          </li>
          <li>
            { displayListItem(category, 'Crew', 'crew')}
          </li>
        </Fragment>
      );
    case 'starships':
      return (
        <Fragment>
          <li>
            { displayListItem(category, 'Model', 'model')}
          </li>
          <li>
            { displayListItem(category, 'Manufacturer', 'manufacturer')}
          </li>
          <li>
            { displayListItem(category, 'Crew', 'crew')}
          </li>
        </Fragment>
      );
    default:
      break;
  }
};

const HomePreview = ( { resource }) => {

  const category = useHomeResources(resource);

  let categoryTitle  = category.title || category.name;
  let categoryPath = categoryTitle !== undefined ? categoryTitle.replace(/\s+/g, '') : categoryTitle;

return (
 <Fragment>
   <h3 className='home__category-title'>{categoryTitle}</h3>
   <ul className='category-list'>
     {displayPreview(resource, category)}
   </ul>
   <Link
     to={{
       pathname: `/${resource}/${categoryPath}`,
       state: {resource: category}
     }} >See more</Link>
 </Fragment>)
};

export default HomePreview;
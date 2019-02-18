import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { loadState } from '../../localStorage';
import useHomeResources from '../../hooks/useHomeResources';

const displayListItem = (category, detail, property) => {
  return (
    <Fragment>
      { `${detail}: ${category[property]}` }
    </Fragment>
  );
};

const displayPreview = (resource, category) => {
  switch (resource) {
    case 'films':
      return (
        <Fragment>
          <li>
            { displayListItem(category, 'Directed by', 'director')}
          </li>
          <li>
            { displayListItem(category, 'Produced by', 'producer')}
          </li>
          <li>
            { displayListItem(category, 'Released', 'release_date')}
          </li>
        </Fragment>
      );
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
            { displayListItem(category, 'Classification', 'episode_id')}
          </li>
          <li>
            { displayListItem(category, 'Average Lifespan', 'episode_id')}
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
  loadState(resource, category);

  console.log(category);

return (
 <Fragment>
   <h3>{categoryTitle}</h3>
   <ul>
     {displayPreview(resource, category)}
   </ul>
   <Link
     className='home__category'
     to={{
       pathname: `/${resource}/${categoryTitle}`,
       state: {resource: category}
     }} >See more</Link>
 </Fragment>)
};

export default HomePreview;
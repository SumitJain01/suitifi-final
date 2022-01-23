import React from 'react';
import H2 from 'shared/components/Html/H2';
import { connect } from 'react-redux';
import { compose, map, prop, filter, propSatisfies, includes, values } from 'ramda';
import { createStructuredSelector } from 'reselect';
import ProductListBySlugs from 'containers/Contentful/components/ProductListBySlugs';
import { makeSelectProductEntities } from 'containers/Products/redux/selectors';

const ProductListByCatId = ({ productEntities, categoryId, title }) => {
  if (!categoryId) {
    return null;
  }

  const slugs = compose(
    map(prop('slug')),
    filter(propSatisfies(includes(categoryId), 'categories')),
  )(productEntities);

  return (
    <div>
      {title && <H2 style={{ textAlign: 'center' }}>---: {title} :---</H2>}
      <ProductListBySlugs slugs={slugs} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  productEntities: compose(values, makeSelectProductEntities()),
});

export default connect(mapStateToProps)(ProductListByCatId);

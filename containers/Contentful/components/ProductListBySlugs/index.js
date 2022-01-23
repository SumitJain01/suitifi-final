import renderProductListData from 'utils/helpers/products/renderProductListData.js';
import { makeSelectProductEntities } from 'containers/Products/redux/selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function ProductListBySlugs({ slugs = [], productEntities }) {
  if (!slugs.length) {
    return null;
  }
  let AvailableSlugList = slugs.filter((slug) => productEntities[slug])
  let sortedSlugs = productEntities && AvailableSlugList.sort((a, b) => {
    if (productEntities[a] && productEntities[b] && productEntities[a].is_in_stock < productEntities[b].is_in_stock) {
      return 1;
    }
    if (productEntities[a] && productEntities[b] && productEntities[a].is_in_stock > productEntities[b].is_in_stock) {
      return -1
    }
    return 0;
  })

  let products = sortedSlugs.map(slug => productEntities[slug]);
  
  return renderProductListData({ products: products });
}

const mapStateToProps = createStructuredSelector({
  productEntities: makeSelectProductEntities(),
});

export default connect(mapStateToProps)(ProductListBySlugs);

import transform from './transform';

export default function cartAdder(props) {
  const {
    product, addToCart, qty, variantData,
  } = props;
  const variantInfo = variantData && {
    product_option: {
      extension_attributes: {
        configurable_item_options: [
          {
            option_id: variantData.option_id,
            option_value: variantData.option_value,
          },
        ],
      },
    },
    id: variantData.product_id,
    parentId: product.id,
  };
  if (product.type === 'configurable') {
    addToCart({
      ...transform(product), qty, ...variantInfo,
    });
  } else {
    addToCart({
      ...transform(product), qty,
    });
  }
}

import products from '../../products.json'

export default {
  paths() {
    let localProducts = products.filter(item => item.external == false && item.marketplace == true);
    return localProducts.map(item => ({ params: { url: item.url }}));;
  }
}
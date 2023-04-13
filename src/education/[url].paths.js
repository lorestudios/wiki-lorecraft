import products from '../../products.json'

export default {
  paths() {
    let localProducts = products.filter(item => item.external == false && item.education == true);
    return localProducts.map(item => ({ params: { url: item.url }}));;
  }
}
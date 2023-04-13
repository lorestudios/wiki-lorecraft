import posts from '../../blog.json'

export default {
  paths() {
    let localPosts = posts.filter(item => item.external == false);
    return localPosts.map(item => ({ params: { url: item.url }}));;
  }
}
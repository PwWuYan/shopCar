import Loadable from 'react-loadable';
import Loading from '../views/loading';

const Index = Loadable({
    loader: () =>
        import ('../views/index'),
    loading: Loading,
});
const Shop = Loadable({
    loader: () =>
        import ('../views/shop'),
    loading: Loading,
});
const Vote = Loadable({
    loader: () =>
        import ('../views/vote'),
    loading: Loading,
});


export default [{
    path: '/',
    redirect: '/index'
}, {
    path: '/index',
    component: Index
}, {
    path: '/shop',
    component: Shop
}, {
    path: '/vote',
    component: Vote
}]
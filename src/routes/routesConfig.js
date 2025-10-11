import PeoplePage from '@containers/PeoplePage';
import FavoritesPage from '@containers/FavoritesPage';
import SearchPage from '@containers/SearchPage';
import ErrorMessage from '@components/ErrorMessage';
import PersonPage from '@containers/PersonPage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';

const routesConfig = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/people',
        element: <PeoplePage/>
    },
    {
        path: '/favorites',
        element: <FavoritesPage/>
    },
    {
        path: '/search',
        element: <SearchPage/>
    },
    {
        path: '/fail',
        element: <ErrorMessage/>
    },
    {
        path: '/people/:id',
        element: <PersonPage/>
    },
    {
        path: '*',
        element: <NotFoundPage/> 
    }
]

export default routesConfig;
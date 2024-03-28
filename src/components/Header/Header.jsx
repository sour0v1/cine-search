
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-9'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-bold text-orange-600'>cine<span className='text-2xl font-bold text-gray-900'>Search</span></h1>
                <div className='flex gap-3 items-center'>
                    <NavLink to={'/'}>
                        <p className='font-medium'>Home</p>
                    </NavLink>
                    <NavLink to={'/favorites'}>
                        <p className='font-medium'>Favorites</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
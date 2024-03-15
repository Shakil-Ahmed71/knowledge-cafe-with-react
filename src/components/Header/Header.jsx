import profile from '../../assets/images/profile.png';
const Header = () =>{
    return(
        <header className='flex justify-between items-center border-b-2 mt-4'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe With React</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;
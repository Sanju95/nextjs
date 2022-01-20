
const Header = ({ title }) => {
    return (
        <div>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/schedule'>Schedule</a></li>
            </ul>
            <h1>{title ? title : 'Default Title'}</h1>
        </div>
    )
}

 export default Header
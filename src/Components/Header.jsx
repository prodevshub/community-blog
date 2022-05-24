/* eslint-disable react/react-in-jsx-scope */
function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <a href="#">
                    <svg>
                        <use xlinkHref="#clower" />
                    </svg>
                </a>
            </div>
            <div className="header-title">
                <h1>
                    <span>Lucky </span>
                    community blog
                </h1>
                <hr />
                <span className="header-title--desc">to notice, observe and enjoy...</span>
            </div>
            <div className="header-nav">
                <a href="#menu">
                    &#9776;
                </a>
            </div>
        </div>
    );
}
export default Header;

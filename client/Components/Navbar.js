


const Navbar = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
                    <div to="/" className="navbar-brand">
                        <img style={{maxHeight:'35px'}} src="../assets/logo.png"/> ToDo List
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <div to="/" className="nav-link" >
                                    Home
                                </div>
                            </li>
                            <li  className="nav-item">
                                <div to="/tasks" className="nav-link" >
                                    Tasks
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar

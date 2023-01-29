import {useRef} from 'react';

export default function Menu() {
    const ref = useRef(null);
    const disableNavList = () =>{
        ref.current.checked = false
    }

    return (
        <nav>
            <input type="checkbox" id="toggle" ref={ref}></input>
            <a className="navbar-brand" href="#">
                Raça dreads
            </a>
            <label className="navbar-toggler" for="toggle">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </label>
            <ul className="nav-list">
                <li className="nav-item" onClick={disableNavList}>
                       <a className="nav-link" onClick={disableNavList}>Produtos</a>
                </li>
                <li className="nav-item">
                       <a className="nav-link" onClick={disableNavList}>Conhecimentos</a>
                </li>
                <li className="nav-item">
                       <a className="nav-link" onClick={disableNavList}>Produtos</a>
                </li>
            </ul>
        </nav>
    )
}
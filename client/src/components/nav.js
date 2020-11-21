import { React } from "react";

function Navbar() {
    return (
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Charts</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/stackedbar">Stacked Bar</a></li>
                <li><a href="/">Scattered Bar</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
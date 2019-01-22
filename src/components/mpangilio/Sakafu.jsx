import React from "react";
import { Link } from "react-router-dom";

export default function Sakafu() {
    return (
        <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3">
                <span>© 2018 Hati miliki</span>
                &nbsp;
                <Link to="/kuhusu">
                    Kuhusu
                </Link>
            </div>
        </footer>
    );
}
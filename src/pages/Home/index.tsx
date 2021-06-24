import React from "react";
import './styles.css';
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Recycling" title="Recycling" />
                </header>

                <main>
                    <h1>Selective collection and recycling in general</h1>
                    <p>Recycling of various materials, such as paper, plastic, metal, cells and batteries, etc.</p>

                    <Link to="/create-location" title="Recycling">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Register a new collection site</strong>
                    </Link>
                </main>
            </div>
        </div>
    );
}

export default Home;
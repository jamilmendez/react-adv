import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { RegisterPage, FormikAbstractation, FormikBasicPage, FormikComponents, FormikYupPage } from '../03-forms/pages';

import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstractation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About Page</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/formik-basic" element={ <FormikBasicPage /> } />
                    <Route path="/formik-yup" element={ <FormikYupPage /> } />
                    <Route path="/formik-components" element={ <FormikComponents /> } />
                    <Route path="/formik-abstractation" element={ <FormikAbstractation /> } />
                    <Route path="/about" element={ <h1>About Page</h1> } />
                    
                    <Route path="/*" element={ <Navigate to="/about" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
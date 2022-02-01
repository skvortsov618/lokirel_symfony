import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

const AdminPanel = () => {

    return (
        <div style={{color:"black"}}>
            <div>MENU</div>
            <ul>
                <li>
                <Link to="/admin">Статьи</Link>
                </li>
                <li>
                <Link to="/admin/gallery">Галерея</Link>
                </li>
                <li>
                <Link to="/admin/feedback">Обратная связь</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default AdminPanel;
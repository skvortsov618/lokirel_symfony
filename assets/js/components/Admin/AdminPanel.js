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
                <Link to="/admin">Приветствие!</Link>
                </li>
                <li>
                <Link to="/admin/articles">Статьи</Link>
                </li>
                <li>
                <Link to="/admin/gallery">Галерея</Link>
                </li>
                <li>
                <Link to="/admin/landing">Первая страница</Link>
                </li>
                <li>
                <Link to="/admin/blog">Блог</Link>
                </li>
                <li>
                <Link to="/admin/feedback">Обратная связь</Link>
                </li>
                <li>
                <Link to="/admin/users">Учетные данные</Link>
                </li>
                <li>
                <Link to="/admin/cache">Кеширование</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default AdminPanel;
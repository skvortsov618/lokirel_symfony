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
        <div style={{color:"black", display: "flex", flexDirection: "horizontal"}}>
            <div style={{height: "100vh", width: "300px", borderRight: "2px solid green"}}>
                <ul>
                    <li>
                        <Link to="/admin">Начало</Link>
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
                        <Link to="/admin/privacypolicy">Политика конфиденциальности</Link>
                    </li>
                    <li>
                        <Link to="/admin/contacts">Контакты</Link>
                    </li>
                    <li>
                        <Link to="/admin/footer">Подвал</Link>
                    </li>
                    <li>
                        <Link to="/admin/users">Учетные данные</Link>
                    </li>
                    <li>
                        <Link to="/admin/cache">Кеширование</Link>
                    </li>
                </ul>
            </div>
            <div style={{height: "100%"}}>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminPanel;
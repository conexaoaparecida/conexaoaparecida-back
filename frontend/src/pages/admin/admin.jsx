import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.jsx';

export function Admin() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const roles = JSON.parse(localStorage.getItem('roles'));

        if (!token || !roles || !roles.includes('admin')) {
            navigate('/login');
        } else {
            fetchUserData(token);
        }
    }, [navigate]);

    const fetchUserData = async (token) => {
        // Simulação de dados do usuário
        setUser({ username: 'admin', email: 'admin@example.com' });
    };

    return (
        <div className="dashboard-container">
            <Navbar />
            <h1>Bem-vindo à Administração!</h1>
            {user ? (
                <div className="user-info">
                    <p><strong>Nome:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            ) : (
                <p>Carregando informações do usuário...</p>
            )}
        </div>
    );
}

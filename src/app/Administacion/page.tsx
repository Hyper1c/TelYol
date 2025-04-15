'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function AdminPanel() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [liveStreamUrlInput, setLiveStreamUrlInput] = useState('');
  const [streamTitleInput, setStreamTitleInput] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAdminLoggedIn');
    if (storedAuth === 'true') {
      setLoggedIn(true);
      const storedUrl = localStorage.getItem('liveStreamUrl');
      const storedTitle = localStorage.getItem('streamTitle');
      if (storedUrl) {
        setLiveStreamUrlInput(storedUrl);
      }
      if (storedTitle) {
        setStreamTitleInput(storedTitle);
      }
    }
  }, []);

  const handleLogin = () => {
    if (username === 'Adm' && password === '1') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      setLoggedIn(true);
      setLoginError('');
    } else {
      setLoggedIn(false);
      setLoginError('Credenciales incorrectas');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleSaveStreamInfo = () => {
    localStorage.setItem('liveStreamUrl', liveStreamUrlInput);
    localStorage.setItem('streamTitle', streamTitleInput);
  };

  if (loggedIn) {
    return (
      <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Panel de Administración
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="liveStreamUrl">
              URL del Live (YouTube/Facebook):
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="liveStreamUrl"
              type="text"
              placeholder="Ej: https://www.Facebook.com/embed/..."
              value={liveStreamUrlInput}
              onChange={(e) => setLiveStreamUrlInput(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streamTitle">
              Título del En Vivo:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="streamTitle"
              type="text"
              placeholder="Ej: Transmisión Especial"
              value={streamTitleInput}
              onChange={(e) => setStreamTitleInput(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSaveStreamInfo}
            >
              Guardar Cambios
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    );


    


  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Iniciar Sesión Administración
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Usuario:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {loginError && <p className="text-red-500 text-xs italic">{loginError}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JournalForm from './components/JournalForm';
import MoodChart from './components/MoodChart';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function App(){
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [entries, setEntries] = useState([]);

  useEffect(()=> {
    if(token) fetchEntries();
  }, [token]);

  async function fetchEntries(){
    try{
      const res = await axios.get(API + '/entries', { headers: { Authorization: 'Bearer ' + token }});
      setEntries(res.data);
    }catch(err){ console.error(err); }
  }

  async function handleLogin(email, password){
    try{
      const res = await axios.post(API + '/auth/login', { email, password });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
    }catch(err){ alert('Login failed'); }
  }

  async function handleSignup(name,email,password){
    try{
      const res = await axios.post(API + '/auth/signup', { name, email, password });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
    }catch(err){ alert('Signup failed'); }
  }

  async function addEntry(data){
    try{
      await axios.post(API + '/entries', data, { headers: { Authorization: 'Bearer ' + token }});
      fetchEntries();
    }catch(err){ console.error(err); }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow rounded p-6">
        <h1 className="text-2xl font-bold mb-4">Personalized Wellness Journal</h1>
        {!token ? (
          <div>
            <h2 className="text-lg font-semibold">Login</h2>
            <AuthForms onLogin={handleLogin} onSignup={handleSignup}/>
          </div>
        ) : (
          <>
            <JournalForm onAdd={addEntry}/>
            <MoodChart entries={entries}/>
          </>
        )}
      </div>
    </div>
  )
}

function AuthForms({ onLogin, onSignup }){
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({});
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <button className="px-3 py-1 border rounded" onClick={()=>setIsSignup(false)}>Login</button>
        <button className="px-3 py-1 border rounded" onClick={()=>setIsSignup(true)}>Signup</button>
      </div>
      {isSignup && (
        <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})} className="border p-2 w-full"/>
      )}
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})} className="border p-2 w-full"/>
      <input placeholder="Password" type="password" onChange={e=>setForm({...form,password:e.target.value})} className="border p-2 w-full"/>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={()=> isSignup ? onSignup(form.name,form.email,form.password) : onLogin(form.email,form.password)}>
          {isSignup ? 'Signup' : 'Login'}
        </button>
      </div>
    </div>
  )
}

export default App;

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FileList from './components/FileList';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6">
          <FileList />
        </main>
      </div>
    </div>
  );
}

export default App;
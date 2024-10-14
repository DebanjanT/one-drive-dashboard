import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Invoice2 from "./components/Invoice2";

function App() {
  return (
    <div className="min-h-screen  flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-auto ">
        <Sidebar />
        <main className="flex-1 overflow-auto p-4 h-[calc(100vh-55px)] bg-gradient-to-r from-transparent via-background to-background">
          {/* <FileList /> */}
          <Invoice2 />
        </main>
      </div>
    </div>
  );
}

export default App;

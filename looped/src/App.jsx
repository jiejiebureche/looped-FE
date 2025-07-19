import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8 text-[#530B73]">
        <h1 className="text-3xl font-bold">Navbar Preview</h1>
        <p className="mt-4 text-gray-700">
          This is a placeholder page to help you test the navbar. Resize the window to check mobile responsiveness.
        </p>
      </div>
    </div>
  );
}

export default App;

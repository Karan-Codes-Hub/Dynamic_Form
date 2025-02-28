import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
    <Header />
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700">
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10 text-center transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-md animate-fade-in">
          Dynamic Form
        </h1>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default App;




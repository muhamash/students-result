import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/head/Header';
import Search from './components/searchField/Search';
import StudentsResult from './components/student/StudentsResult';

function App() {

  return (
    <div className=''>
      <div className=''>
        {/* header */}
        <Header />
        {/* body */}
        <div className='bg-slate-900 py-24 lg:pt-[120px] lg:pb-28'>
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-3xl lg:text-[40px] mb-9 font-bold text-white">
              <span className="text-[#00CC8C]">Students</span> of the Year
            </h2>
            {/* search field */}
            <Search/>
          </div>

          {/* table content */}
          <div className='px-2'>
              <StudentsResult/>
          </div>

          {/* tail / footer */}
          <div className='pt-10 px-3'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

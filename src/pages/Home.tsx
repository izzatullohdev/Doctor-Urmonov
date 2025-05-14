import About from '../components/About';
import Biographia from '../components/Biographia';
import HomeCards from '../components/HomeCards';
import Videos from '../components/Videos';
import Patients from '../components/Patients';
import Information from '../components/Information';

const Home = () => {
  return (
    <div className=''>
        <About />
        <Biographia />
        <HomeCards />
        <Patients />
        <Videos />
        <Information />
    </div>
  )
}

export default Home;
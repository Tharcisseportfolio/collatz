import Formula from '../Formula';
import Action from '../actions/Action';
import Count from '../AutoCount';
import Typewriter from '../AutoType';

import '../../styles/Home.css';

const Home = () => {

    return (
        <div className='home p-4'>
            <div className='subtitle'>
                <h1 className='p-5'>Collatz conjecture</h1>
                <h1></h1>
                <h2>The simple math topic that is almost unsolvable</h2>
                <h3>.....Also called  <Formula  expression=' 3x + 1 ' /> Problem </h3>
                
            </div>
            <div className='actions'>
                <Action />
            </div>
            
        </div>
    );
};

export default Home;
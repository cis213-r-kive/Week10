import { Link } from 'react-router-dom';

function Home(){
    return (
        <main>
            <h1>Welcome to our shop! Buy some latest albums here!</h1>
            <p>
                Please explore <Link to="/products">our products</Link>
            </p>
        </main>
    );
}

export default Home;
import './App.css';
import Main from "./components/main/Main"
function App() {
    return (
        <>
            <div className='oq'>
                <form>
                    <p className="kor">Ism:</p>
                    <input className='inp' type="text" placeholder='Ismingizni kiriting' required />
                    <input className='inpu' type="text" placeholder='Emailingizni kiriting' required />
                    <p className="kora">Email:</p>
                    <button type="submit" className='btn1'>Kirish</button>
                </form>
                <button type="submit" className='btn2'>Chiqish</button>
                <button type="submit" className='btn3'>Yana <i class="bi bi-chevron-down"></i></button>
            </div>
            <Main />
        </>
    );
}

export default App;

import './App.css';
import UserInfo from './components/UserInfo';
import Header from './components/header';

function App() {
  return (
    <div className="App">
        <Header />
        <UserInfo name="Kauê" birthday="08/09/2004" email="kaue@email.com"/>
        <UserInfo name="TestMan" birthday="32/14/6216" email="teste@teste.com"/>
    </div>
  );
}

export default App;

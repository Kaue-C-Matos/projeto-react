import './App.css';
import InputText from './components/InputText';
import OrderNumbers from './components/OrderNumbers';
import UserInfo from './components/UserInfo';
import Header from './components/header';

const listUsers = [{
  name: 'Teste nome',
  birthday: '10/10/10',
  email: "teste@teste.com"
},
{
  name: 'Teste nome 2',
  birthday: '10/10/10',
  email: "teste2@teste.com"
},
{
  name: 'Teste nome 3',
  birthday: '10/10/10',
  email: "teste3@teste.com"
}]

function App() {
  return (
    <div className="App">
        <Header />
        <UserInfo users={listUsers}/>
        <OrderNumbers/>
        <InputText/>
    </div>
  );
}

export default App;

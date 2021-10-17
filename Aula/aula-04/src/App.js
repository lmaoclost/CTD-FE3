import './App.css';

function App() {
 
  const user = {
     firstName: 'Turma',
     lastName: 'XX'
  };

  const greeting = () => {
    if(user.firstName){
      return `${user.firstName} ${user.lastName}`;
    }
    return 'desconhecido'
  }

  return (
    <div>
      <h1>Olá, {greeting()}!</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, iusto sunt. Repellendus, facere aspernatur quo sequi labore aperiam, quisquam nesciunt ut reiciendis recusandae laborum deserunt cum soluta nostrum ullam mollitia!</p>
    </div>
  );
}

export default App;

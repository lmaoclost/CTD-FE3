import Header from './components/Header';
import './App.css';

function App() {
 
  const user = {
     firstName: 'Turma',
     lastName: 'XX'
  };

  return (
    <>
      <Header user={user} />
      <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, iusto sunt. Repellendus, facere aspernatur quo sequi labore aperiam, quisquam nesciunt ut reiciendis recusandae laborum deserunt cum soluta nostrum ullam mollitia!</p>
      </div>
    </>
  );
}

export default App;

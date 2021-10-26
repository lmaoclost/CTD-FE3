import Greeting from './components/Greeting';
import Paragraph from './components/Paragraph';
import './App.css';

function App() {
  const user = {
    firstName: 'Turma',
    lastName: 'XX'
  }

  return (
    <div className="App">
      <Greeting user={user}/>
      <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, iusto sunt. Repellendus, facere aspernatur quo sequi labore aperiam, quisquam nesciunt ut reiciendis recusandae laborum deserunt cum soluta nostrum ullam mollitia!</Paragraph>
    </div>
  );
}

export default App;

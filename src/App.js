
import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import Curso from './pages/cursos/Curso';
import Disciplinas from './pages/cursos/Disciplinas';
import Alunos from './pages/cursos/Alunos';
import DisciplinasLista from './pages/cursos/DisciplinasLista';
import Professores from './pages/cursos/Professores';
import Sala from './pages/cursos/Sala';
import Semestre from './pages/cursos/Semestre';
import AlunosLista from './pages/cursos/AlunosLista';
import CursoLista from './pages/cursos/CursoLista';
import ProfessoresLista from './pages/cursos/ProfessoresLista';
import SalaLista from './pages/cursos/SalaLista';
import SemestreLista from './pages/cursos/SemestreLista';

function App() {
  return (
    <div>
      
  <BrowserRouter>
    
    <Menu/>

    <Routes>
      
      <Route path="/cursos" element={<Curso/>}/>  
      <Route path="/disciplinas" element={<Disciplinas/>}/>
      <Route path="/alunos" element={<Alunos/>}/> 
      <Route path="/disciplinaslista" element={<DisciplinasLista/>}/>
      <Route path="/professores" element={<Professores/>}/> 
      <Route path="/sala" element={<Sala/>}/>
      <Route path="/semestre" element={<Semestre/>}/>
      <Route path="/disciplinas/:id" element={<Disciplinas/>}/> 
      <Route path="/alunoslista" element={<AlunosLista/>}/> 
      <Route path="/alunos/:id" element={<Alunos/>}/>  
      <Route path="/cursolista" element={<CursoLista/>}/>
      <Route path="/cursos/:id" element={<Curso/>}/>
      <Route path="/professoresLista" element={<ProfessoresLista/>}/>
      <Route path="/professores/:id" element={<Professores/>}/>
      <Route path="/salalista" element={<SalaLista/>}/>
      <Route path="/sala/:id" element={<Sala/>}/>
      <Route path="/semestrelista" element={<SemestreLista/>}/>
      <Route path="/semestre/:id" element={<Semestre/>}/>
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
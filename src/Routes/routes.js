import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Ejercicios from '../pages/Ejercicios/Ejercicios';
import AbdomenPlano from '../pages/Abdomen Plano/AbdomenPlano';
import Gluteos from '../pages/Gluteos/Gluteos';
import QuemaGrasaPesas from '../pages/QuemaGrasaPesas/QuemaGrasaPesas';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Ejercicios/" element={<Ejercicios/>}/>
            <Route path="/AbdomenPlano/" element={<AbdomenPlano/>}/>
            <Route path="/Gluteos/" element={<Gluteos/>}/>
            <Route path="/QuemaGrasaPesas/" element={<QuemaGrasaPesas/>}/>
        </Routes>
    </BrowserRouter>
);
export default Router;
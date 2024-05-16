import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/header';
import { Intro } from '../components/intro';
import { Pose } from '../components/pose';


const title = 'Jogíni'
const heading = 'Vítejte mezi Jogíny'
const text = `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
Postupně se seznámíte se základními principy jógy, jak přístupovat k
sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
svoje tělo, pocity a emoce.`
// const imgSrc = 'yoga-pose.jpg'
const imgSrc = 'yoga-pose.jpg'



document.querySelector('#root').innerHTML = render(
  <div id="app" className="app container">
    <Header title = {title}/>
    <Intro heading = {heading} text = {text}/>
    <Pose src = {imgSrc}/>
  </div>
);

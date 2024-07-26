import React, { useContext, useState } from 'react'
import "./Home.css";
import { CountdownProvider } from '../context/CountdownContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [title,setTitle] = useState();
    const [date,setDate] = useState();
    const [image,setImage] = useState();
    const [color,setColor] = useState();

    const {setEvent} = useContext(CountdownProvider);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const eventObject = {
            title,
            date,
            image,
            color,
        }

        setEvent(eventObject);

        navigate("/countdown");
    };

  return <div className='home'>
    <h2>Monte a sua contagem regressiva!</h2>
    <form className='countdown-form' onSubmit={handleSubmit}>
        <label>
            <span>Título:</span>
            <input 
                type="text" 
                name='title' 
                placeholder='Digite o titulo do evento'
                onChange={(e) => setTitle(e.target.value)}
                required
            />
        </label>
        <label>
            <span>Data do evento:</span>
            <input 
                type="date" 
                name='date'
                onChange={(e) => setDate(e.target.value)}
                required
            />
        </label>
        <label>
            <span>Imagem:</span>
            <input 
                type="text" 
                name='image' 
                placeholder='Insira a URL da imagem'
                onChange={(e) => setImage(e.target.value)}
            />
        </label>
        <label>
            <span>Cor do tema:</span>
            <input 
                type="color" 
                name='color'
                onChange={(e) => setColor(e.target.value)}
                required
            />
        </label>
        <input type="submit" value="Enviar"/>
    </form>
  </div>
}

export default Home
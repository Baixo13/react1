import React from 'react';
import Card from './components/Card';

const App = () => {

    return (
        <div class="portfolio">
            <h1 class="portafoio__head">Portafolio</h1>
            <div class="portfolio__content">
                <Card title="titulo 1" pg="aslkfjhalksdjfh" caption="Visitar" urlImg="https://picsum.photos/200/200" modalTitle="Titulo 1"/>
                <Card title="titulo 2" pg="aslkfjhalksdjfh" caption="Visitar" urlImg="https://picsum.photos/200/200" />
                <Card title="titulo 3" pg="aslkfjhalksdjfh" caption="Visitar" urlImg="https://picsum.photos/200/200" />
            </div>
        </div>
    )
};

export default App;

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

  
function App() {

  function handleSelect() {
    console.log("Hello world - button Selected")
}

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          description = {CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}/>

          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>

          {/* By using the spread operator we can make the code shoter  */}

          {/* <CoreConcept 
          title={CORE_CONCEPTS[2].title}
          description = {CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}/>

          <CoreConcept 
          title={CORE_CONCEPTS[3].title}
          description = {CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}/> */}
          
        </ul>

        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {/* By passing the normal porp  */}
           {/* <TabButton label="components"/> */}
           <TabButton onSelect={handleSelect}>Components</TabButton>
           <TabButton onSelect={handleSelect}>JSX</TabButton>
           <TabButton onSelect={handleSelect}>Props</TabButton>
           <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;

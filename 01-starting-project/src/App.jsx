
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from "react";


  
function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {

    // selectedButton => 'components', 'JSX', 'props', 'state'
    // console.log(selectedTopic)
    setSelectedTopic(selectedButton)
}

let tabContent = <p>Please Select a topic</p>;

if(selectedTopic) {
  tabContent = (<div id="tab-content">
  <h3>{EXAMPLES[selectedTopic].title} </h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
     <code>
     {EXAMPLES[selectedTopic].code}
     </code>
  </pre>
 </div>)
}

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            
          <CoreConcept key={conceptItem.title} {...conceptItem}/>
          ))}
          {/* <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          description = {CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}/>

          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/> */}

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
           <TabButton 
                      isSelected={selectedTopic === 'components'} 
                      onSelect={() => handleSelect('components')}>
                        Components
            </TabButton>

           <TabButton 
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}>
                JSX
            </TabButton>

           <TabButton
              isSelected={selectedTopic === 'props'} 
              onSelect={() => handleSelect('props')}>
                Props
            </TabButton>

           <TabButton 
               isSelected={selectedTopic === 'state'}
               onSelect={() => handleSelect('state')}>
                State
            </TabButton>
          </menu>

          {/* First approach of rendering content conditionally - using ternary operator  */}

              {/* {!selectedTopic ? <p>Please Select a topic</p> : (<div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title} </h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                 <code>
                 {EXAMPLES[selectedTopic].code}
                 </code>
              </pre>
             </div>)} */}

           {/* Second Approach of rendering content conditionally - by using && operator  */}

           {/* {!selectedTopic && <p>Please Select a topic</p>}
           {selectedTopic && (<div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title} </h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                 <code>
                 {EXAMPLES[selectedTopic].code}
                 </code>
              </pre>
             </div>)} */}

             {/* Third Approach of rendering content conditionally - by using variable   */}

             {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;

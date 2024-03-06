
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from './TabButton.jsx';
import  Section  from "./Section.jsx";
import Tabs from "./Tabs.jsx";


export default function Examples() {
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

        <Section id='examples' title="Examples">
            <Tabs 
            ButtonsContainer="menu"
            buttons={
            <>
            
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

            </>}>
                {tabContent}
             </Tabs>
          

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

        </Section>
    )
}

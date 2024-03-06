
// There are three approach to use the prop and pass the value. 

// 1. Children Prop 

 // The Children prop -> {props.children}
// React automatically passes a special prop named "children" to every custom component

// Content for Children 
// The content between component opening and closing tags is used as a value for the special "children" prop. 


// important points :
//   - For components that take a single piece of renderable SVGTextContentElement, this approach is closer to "normal HTML usage". 
//   - This approach is especially convenient when passing JSX code as a value to another component. 



// export default function TabButton(props) {
//     // Passing the children prop to custom component 
//     return <li><button>{props.children}</button></li>;
// }

// The above code can be written like this by storing it in one variable 



export default function TabButton({children, onSelect, isSelected}) {
    // Passing the children prop to custom component 


    return (
    <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
    );
}


// 2. Attribute props 

// important point : 
//    - This approach makes sense if you got multiple smaller pieces of information that must be passed to a Component.Component
//    - Adding extra porps instead of just wrapping the content with the component tags mean extra Work. 

// export default function TabButton({label}){
//     return (
//         <li>
//             <button>{label}</button>
//         </li>
//     );
// }


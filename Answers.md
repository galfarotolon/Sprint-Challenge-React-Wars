# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS offers better handling of dynamic data for faster response times by changing application state. As the name implies, it “reacts” to incoming data instantly and renders the components accordingly. 
The problem it solves is that the information is not static and changes over time. 


2. Describe component state.

setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.

The initial state is at first render and then state changes when set to a different value. 


3. Describe props.

React is a component based library that divides the code into separate reusable pieces. In some cases, those components need to pass data to eachother and the way to pass data between components is by using props.

Props is a special keyword in React, which stands for properties and is being used for passing data from one component to another.

The important rule here is that prop data only flows from parent to child and not vice versa. Additionally, data can
only be used by the child as read-only; it can not be altered in any way. 


4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?


A "side effect" is anything that affects something outside the scope of the function being executed. This comes normally in the form of a network request (using get and axios currently). Each time state changes, side effects can be triggered. They can be programmed to trigger only at first render though. {UseEffect} is the hook used to apply side effects to an application. 



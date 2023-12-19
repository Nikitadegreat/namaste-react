// const heading=React.createElement("h1",{id:"heading"},"Hello World from react!");
//     const root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);
/**
 * 
 * <div id="parent">
 * <div id="child">
 * <h1>I'm a h1 tag
 * </h1>
 * 
 * </div>
 * 
 * </div>
 *
 */
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"}
,[React.createElement("h1",{},"I'm an h1 hello tag"),  
React.createElement("h1",{},"I'm an h1 tag"),
React.createElement("h2",{},"I am an h2 tag"),

React.createElement("h2",{},"I am an h2 tag")]));
 
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
 i
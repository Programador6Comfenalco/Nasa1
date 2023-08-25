let style = "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"

let content = (

<div>
    {[...Array(10).keys()].map((i) => (
        <span class={style} key={i}>{i + 1}</span>
    ))}
</div>

);


function App() {return(content);}
ReactDOM.render(<App/>, document.getElementById('root'));


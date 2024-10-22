import react from 'react'

function App({color}){

    return(
        <button type="button" class="rounded-full bg-{color} px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
        Button text
        </button>
    )
}

export default App;
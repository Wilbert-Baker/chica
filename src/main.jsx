import { strictmode}from `react`
import {createroot} from `react-dom/client`
import `./index.css`
import  App  from './App.jsx'

createRoot(document.getElementById('app')).render(
    <StrictMode>
        <App /> 
    </StrictMode>,
)

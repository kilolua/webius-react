import React from 'react'
import ReactDOM from 'react-dom/client'
import {StoreWrapper} from "@/1-app/store/provider.tsx";
import Main from "@/2-process/Main.tsx";
import Init from "@/2-process/Init.tsx";
import Header from "@/UI/header/Header.tsx";
import './styles/global.css';
import HemulContainer from "@/hemul/HemulContainer.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreWrapper>
            <Init/>
            <Header/>
            <Main/>
            <HemulContainer/>
        </StoreWrapper>
    </React.StrictMode>,
)

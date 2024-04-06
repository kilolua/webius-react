import React from 'react'
import ReactDOM from 'react-dom/client'
import {StoreWrapper} from "@/1-app/store/provider.tsx";
import Main from "@/2-process/Main.tsx";
import Init from "@/2-process/Init.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreWrapper>
            <Init/>
            <Main/>
        </StoreWrapper>
    </React.StrictMode>,
)

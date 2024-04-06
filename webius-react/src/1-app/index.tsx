import React from 'react'
import ReactDOM from 'react-dom/client'
import {StoreWrapper} from "@/1-app/store/provider.tsx";
import Main from "@/2-process/Main.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreWrapper>
            <Main/>
            {/*<RouterProvider router={router}/>*/}
        </StoreWrapper>
    </React.StrictMode>,
)

import { MemoryRouter,  } from "react-router-dom"
import { Router } from "../../pages/Router"
import { Suspense } from "react"

export const renderWithRouter = (component, initialRoute = '/') => {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            <Suspense fallback={<span>...</span>}>
                <Router />
                {component}
            </Suspense>            
        </MemoryRouter>
    )
}

export const renderComponentWithRouter = (component, initialRoute = '/') => {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
                {component}
        </MemoryRouter>
    )
}
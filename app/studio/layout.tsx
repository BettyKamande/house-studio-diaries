import { ReactNode } from "react"

const StudioLayout = ({children}: {children: ReactNode}) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default StudioLayout;
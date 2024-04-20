import { ReactNode } from "react";

const PortfolioLayout = ({children}: {children:ReactNode}) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default PortfolioLayout;
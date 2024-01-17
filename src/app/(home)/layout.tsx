import { CustomNavbar } from '@/components/ui'
import { FC, PropsWithChildren } from 'react'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="bg-[#DC0A2D] h-screen">
            <CustomNavbar />
            <main className="container max-w-screen-lg p-1 mx-auto">
                {children}
            </main>
        </div>
    )
}

export default MainLayout
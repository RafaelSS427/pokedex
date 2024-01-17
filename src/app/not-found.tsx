import { NotFoundIcon } from "@/components"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import {  HiChevronLeft } from "react-icons/hi2"


const NotFoundPage = () => {
    return (
        <div className="w-full h-screen grid place-content-center">
            <div className="px-4">
                <NotFoundIcon className="w-full h-[300px]" />
                <p className="mb-4 text-3xl tracking-tight font-bold text-primary md:text-4xl text-center">{"Something's"} missing.</p>
                <p className="mb-4 text-lg font-light text-gray-500 text-center">Sorry, we {"can't"} find that page. {"You'll"} find lots to explore on the home page.</p>
                <div className="flex justify-center">
                    <Button as={Link} href="/" startContent={ <HiChevronLeft className="text-primary" /> } variant="light" className="bg-container rounded-xl">Back to Home</Button>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage
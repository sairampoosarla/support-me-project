type Props = {
    children?:React.ReactNode
}

//flex flex-col gap-9 min-h-screen items-center justify-center p-24
export default function LoggedOutLayout({children}: Props){
    return(
        <div className="flex flex-col items-center gap-9 min-h-screen justify-center">
            {children}
        </div>
    )

        
}
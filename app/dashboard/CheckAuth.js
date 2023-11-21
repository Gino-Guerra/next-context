"use client"
import { useContext, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AuthContext } from "@/context/AuthContexts"

export default function CheckAuth(){

const {user} = useContext(AuthContext)

const router = useRouter()

useEffect(() => {
    if(!user){
router.push('/login')
    }
}, [user])

    return null
}
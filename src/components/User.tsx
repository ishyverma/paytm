"use client";

import { useDebounce } from "@/hooks/useDebounce";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function User() {
    const [inputVal, setInputVal] = useState<any>("");
    const [data, setData] = useState<any>("");
    const debouncedValue = useDebounce(inputVal)
    useEffect(() => {
        axios.get(`http://localhost:3001/api/v1/user/bulk?filter=${debouncedValue}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then(response => {
            setData(data)
            console.log(data)
        })
    }, [debouncedValue])
    return <div className="flex mt-4 flex-col mx-4">
        <div>
            <span className="font-bold">Users</span>
        </div>
        <div>
            {/* @ts-ignore */}
            <input onChange={(e) => {    
                setInputVal(e.target.value)
            }} className="bg-[#27272A] font-medium mt-2 text-sm px-3 py-[9px] rounded-lg border-[0.5px] focus:outline-[#A3A3A3] focus:outline-none focus:outline-offset-0 border-opacity-50 border-[#A3A3A3] w-full" type="text" placeholder="Search Users" />
        </div>
    </div>
}
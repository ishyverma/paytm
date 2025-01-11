"use client";

import { useEffect, useState } from "react";
import { Badge } from "./Badge";
import axios from "axios";
import { Avatar } from "./Avatar";
import { rupeeConverter } from "@/lib/rupeeConverter";

export function AppBar() {
  const [info, setInfo] = useState<null | UserInfoType>(null);
  const [allUsers, setUsers] = useState("")
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/user/me", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setInfo(response.data);
      });
  }, []);
  return (
    <div>
        <div className="flex justify-between items-center mx-4 font-satoshi pt-4">
        <div className="flex gap-2 justify-center items-center">
            <span className="text-2xl font-semibold">Paytm</span>
            <div className="mt-1">
            <Badge label="Beta" />
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center gap-2">
            <span className="text-base font-medium">
                Hello! {info?.firstName} {info?.lastName}
            </span>
            <Avatar label={`${info?.firstName[0]}${info?.lastName[0]}`} />
            </div>
        </div>
        </div>
        <div className="flex gap-1 justify-start items-center mx-4 mt-4">
            <div>
                <span className="font-medium">Your Balance:</span>
            </div>
            <div>
                <span>
                    {
                        // @ts-ignore
                        rupeeConverter(info?.account[0].balance | 0)
                    }
                </span>
            </div>
        </div>
    </div>
  );
}

interface UserInfoType {
  firstName: string;
  lastName: string;
  username: string;
  account: { balance: number }[];
}

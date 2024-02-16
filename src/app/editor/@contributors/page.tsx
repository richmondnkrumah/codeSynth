"use client";
import React, { useState } from "react";
import AddUserButton from "@/components/ui/AddUserButton";
import PreviewButton from "@/components/ui/PreviewButton";
import { useThemeStore } from "@/store/Theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
type Props = {};

const Contributors = (props: Props) => {
    const { getTheme } = useThemeStore();
    const currentTheme = getTheme();
    const [isPreview, setIsPreview] = useState(false);

    return (
        <div
            className={` flex flex-col gap-2 pt-8 items-center h-full ${currentTheme.colors.primary}`}
        >
            <Avatar>
                <AvatarImage src="" alt="User" />
                <AvatarFallback>CW</AvatarFallback>
            </Avatar>

            <AddUserButton />
            <div
                onClick={() => setIsPreview(true)}
                className="absolute bottom-10 "
            >
                <PreviewButton />
            </div>
            { isPreview && 
            (<div className="w-screen h-screen absolute top-0 right-0 bg-amber-500 z-50 transition-all duration-1000">
                <div className="w-7 cursor-pointer" onClick={() => setIsPreview(false)}>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g id="Menu / Close_SM">
                                {" "}
                                <path
                                    id="Vector"
                                    d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>{" "}
                            </g>{" "}
                        </g>
                    </svg>
                </div>
            </div>)}
        </div>
    );
};

export default Contributors;

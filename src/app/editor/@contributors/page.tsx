"use client";
import React from "react";
import UserAvatar from "@/components/ui/UserAvatar";
import AddUserButton from "@/components/ui/AddUserButton";
import PreviewButton from "@/components/ui/PreviewButton";
import { useThemeStore } from "@/store/Theme";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
type Props = {};

const Contributors = (props: Props) => {
    const { getTheme } = useThemeStore();
    const currentTheme = getTheme();
    return (
        <div
            className={`flex flex-col gap-2 pt-8 items-center h-full ${currentTheme.colors.primary}`}
        >
            <Avatar>
                <AvatarImage src="/src/images/img5.jpg" alt="User Avatar"/>
                <AvatarFallback>CW</AvatarFallback>
            </Avatar>

            <AddUserButton />
            <div className="absolute bottom-10">
                <PreviewButton />
            </div>
        </div>
    );
};

export default Contributors;

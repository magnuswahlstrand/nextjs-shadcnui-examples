"use client"

import * as React from 'react';
import {Button} from "@/components/ui/button";
import {useToast} from "@/components/ui/use-toast";
import {ToastAction} from "@/components/ui/toast";

type Props = {};


const withTitle = {
    title: "Uh oh! Something went wrong.",
    description: "There was a problem with your request.",
}

const basic = {
    description: "Your message has been sent.",
}

const withAction = {
    ...withTitle,
    action: <ToastAction altText="Try again">Try again</ToastAction>,
};

const destructive = {
    ...withAction,
    variant: "destructive",
} as const

const Page = (props: Props) => {
    const {toast} = useToast()

    return (
        <div className="flex flex-col w-52 gap-3">
            <Button
                variant="outline"
                onClick={() => {
                    toast(basic)
                }}
            >
                Show basic toast
            </Button>
            <Button
                variant="outline"
                onClick={() => {
                    toast(withTitle)
                }}
            >
                Show toast with title
            </Button>
            <Button variant="outline" onClick={() => {
                toast(withAction)
            }}>
                Show toast with action
            </Button>
            <Button variant="destructive" onClick={() => {
                toast(destructive)
            }}>
                Show destructive toast
            </Button>
        </div>
    )
        ;
};

export default Page;
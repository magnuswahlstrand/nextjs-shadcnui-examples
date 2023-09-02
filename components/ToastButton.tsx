"use client"
import {useToast} from "@/components/ui/use-toast";
import {Button} from "@/components/ui/button";

type Props = {
    title: string
};
export const ToastButton = ({title}: Props) => {
    const {toast} = useToast()

    return (
        <Button
            variant="outline"
            onClick={() => {
                toast({
                    description: "Your message has been sent.",
                })
            }}
        >
            {title}
        </Button>
    )
};
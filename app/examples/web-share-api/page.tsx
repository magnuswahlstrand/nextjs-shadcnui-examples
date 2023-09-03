"use client"

import {useToast} from "@/components/ui/use-toast";
import {Button} from "@/components/ui/button";

const tryShare = async () => {
    if (!navigator.share)
        return "share_not_supported"

    try {
        await navigator.share({
            title: 'Web Share API',
            text: 'Check out this cool site that uses Web Share API!',
            url: window.location.href,
        })
    } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
            return "share_cancelled"
        }
        return "share_failed"
    }
    return null
}

const useShare = () => {
    const {toast} = useToast()

    const share = async () => {
        const res = await tryShare()
        switch (res) {
            case "share_not_supported":
                toast({
                    title: "Fallback",
                    description: "Your browser does not support the Web Share API, so the link was copied to your clipboard instead",
                })
                navigator.clipboard.writeText(window.location.href)
                break
            case "share_cancelled":
                toast({
                    title: "Share cancelled!",
                    description: "You cancelled the share 🤦‍♀️",
                    variant: "destructive",
                })
                break
            case "share_failed":
                toast({
                    title: "Share failed!",
                    description: "Something went wrong while trying to share 😢 Fallback to copying the link to your clipboard",
                })
                break
            case null:
                //OK
                break
            default:
                const _exhaustiveCheck: never = res
                return _exhaustiveCheck
        }

    }
    return {share}
}

type Props = {};
const Page = (props: Props) => {
    const {share} = useShare()

    return (
        <div>
            <h1>Web Share API</h1>
            <Button onClick={share}>Share</Button>
        </div>
    );
};
export default Page;
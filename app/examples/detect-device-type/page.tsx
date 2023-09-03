"use-client";
import {
    isAndroid,
    isBrowser,
    isChrome,
    isDesktop,
    isEdge,
    isIE,
    isIOS,
    isMobile,
    isSafari,
    isTablet
} from 'react-device-detect';

type Props = {};
const Page = (props: Props) => {


    return (
        <>
            <div className="grid grid-cols-2 gap-x-6">
                <div className="font-bold pt-3 pb-1 col-span-2">Device Type</div>
                <div>Is mobile?</div>
                <div>{isMobile ? "Yes" : "No"}</div>
                <div>Is tablet?</div>
                <div>{isTablet ? "Yes" : "No"}</div>
                <div>Is desktop?</div>
                <div>{isDesktop ? "Yes" : "No"}</div>
                <div className="font-bold pt-3 pb-1 col-span-2">Operating System</div>
                <div>Is Android?</div>
                <div>{isAndroid ? "Yes" : "No"}</div>
                <div>Is iOS?</div>
                <div>{isIOS ? "Yes" : "No"}</div>
                <div className="font-bold pt-3 pb-1 col-span-2">Browser</div>
                <div>Is Browser?</div>
                <div>{isBrowser ? "Yes" : "No"}</div>
                <div>Is Chrome?</div>
                <div>{isChrome ? "Yes" : "No"}</div>
                <div>Is Internet Explorer?</div>
                <div>{isIE ? "Yes" : "No"}</div>
                <div>Is Edge?</div>
                <div>{isEdge ? "Yes" : "No"}</div>
                <div>Is Safari?</div>
                <div>{isSafari ? "Yes" : "No"}</div>
            </div>
        </>
    );
};
export default Page;
import { render } from "preact";
import { Suspense, lazy } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
const Message = lazy(() => import("./message.jsx"));

export function App() {
    const [open, setOpen] = useState(true);
    const [forceRender, setFR] = useState(false);

    useEffect(() => {
        setTimeout(() => setFR(true), 10000);
    }, []);

    return (
        <div>
            Forced render: {forceRender.toString()}
            <Suspense fallback={<div>Loading...</div>}>
                <Message />
            </Suspense>
        </div>
    );
}

render(<App />, document.getElementById("app"));

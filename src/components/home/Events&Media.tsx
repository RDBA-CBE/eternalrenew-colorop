// GLOBAL CUSTOM COMPONENTS
import VideoPlyr from "components/reuseable/VideoPlyr";
// CUSTOM ICON COMPONENT
import Hex from "icons/Hex";
// CUSTOM DATA
import { processList10 } from "data/process";
import { Blog2 } from "components/blocks/blog";

export default function EventsAndMedia() {
    return (
        <section className="wrapper bg-light">
            <div className="container  py-10 py-md-12">
                <Blog2 />
            </div>
        </section>
    );
}

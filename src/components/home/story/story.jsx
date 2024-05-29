import { Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import StoryImg from "./story-img";
import StoryCarousel from "./story-carousel";
import StoryCover from "./story-cover";

const Story = ({story}) => {

    const [open, setOpen] = useState(false);
    const singelStory = () => story.map((singelStory, i) => <StoryImg singelStory={singelStory} key={i}/>)

    return(
        <>
            <StoryCover story={story} setOpen={setOpen}/>            
            <Dialog open={open} size="md" animate={{mount: {scale: 1, y: 0 }, unmount:{scale: 0.9, y: -100 }}}>
                <DialogBody className="p-1 bg-transparent">
                    <StoryCarousel>
                        {singelStory()}
                    </StoryCarousel>
                </DialogBody>
            </Dialog>
        </>
        
        
    )
}

export default Story;
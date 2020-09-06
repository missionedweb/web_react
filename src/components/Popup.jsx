import React from 'react';
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core';
export default function Popup(props){
const { title , children , openPopup, setOpenPopup} = props;

    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>Title</div>
        </DialogTitle>
        <DialogContent>
        {children}
        </DialogContent>
        </Dialog>
    )

}
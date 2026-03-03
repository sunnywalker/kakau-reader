import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Section } from "./SettingsDrawer";
import {
  namesUpper,
  numbersLower,
  openClassOkinaLevelOneLower,
  openClassVowelLevelOneLower,
} from "./constants";
import { Title } from "./Title";

export function OleloMaamauDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <span onClick={handleClickOpen}>
        <strong className="underline hover:opacity-100 opacity-50 cursor-pointer text-sm">
          No ka Olelo Maamau
        </strong>
      </span>
      <Dialog
        fullWidth
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll={"body"}
      >
        <DialogTitle id="alert-dialog-title">
          <Title>{"No ka Olelo Maamau"}</Title>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <Section
                title="Okina"
                id="openClassLevelOne"
                items={openClassOkinaLevelOneLower}
                disableSelect
              />
              <Section
                title="Kahako"
                id="openClassLevelOne"
                items={openClassVowelLevelOneLower}
                disableSelect
              />
              <Section
                title="Helu"
                id="openClassLevelOne"
                items={numbersLower}
                disableSelect
              />
              <Section
                title="Inoa"
                id="openClassLevelOne"
                items={namesUpper}
                disableSelect
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <div className="m-4">
          <DialogActions>
            {/* <Button onClick={handleClose}>Whatever</Button> */}
            <Button variant="contained" onClick={handleClose}>
              Ua Pau
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

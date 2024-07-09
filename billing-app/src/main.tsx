import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


import useStyles from "@/components/designer/tippy/ActionToolbar/styles";
import { TextField } from "@layer5/sistent";
import React from "react";
import { UsesSistent } from "../SistentWrapper";
import { uiTheme } from "../../../globals/theme";
import { styled } from "@material-ui/core";

const StyledTextField = styled(TextField)(({ theme }) => ({
  color: "#eee !important",
  "& label": {
    color: "#eee !important"
  },
  "& .MuiInputBase-root": {
    color: "#eee !important"
  }
}));
export const FileNameInput = ({
  fileName,
  handleFileNameChange,
  handleFocus,
  activateWalkthrough
}) => {
  const classes = useStyles();
  return (
    <UsesSistent>
      <StyledTextField
        id="design-name-textfield"
        onChange={handleFileNameChange}
        label="Name"
        value={fileName || ""}
        autoComplete="off"
        style={{
          color: uiTheme.theme.palette.type === "light" ? "#fff !important" : "#121212"
        }}
        size="small"
        variant="standard"
        onFocus={handleFocus}
        InputProps={{
          classes: {
            input: classes.versionInput
          }
        }}
        onMouseEnter={() => activateWalkthrough && activateWalkthrough()}
      />
    </UsesSistent>
  );
};


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

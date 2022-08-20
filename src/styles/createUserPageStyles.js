import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import { styled } from "@mui/material/styles";

export const StyledFormControl = styled(FormControl)({
  width: "25ch",
});

export const StyledInputLabel = styled(InputLabel)({
  color: "black",
  backgroundColor: "none",
});
export const StyledOutlineInput = styled(OutlinedInput)({
  color: "black",
  backgroundColor: "#f1f3f5",
});
export const StyledFormHelperText = styled(FormHelperText)({
  color: "white",
});

export const StyledButton = styled(Button)({
  width: "25ch",

  outline: "white solid 1px",
  boxShadow: "0 0 10px orange",
  "&:hover": {
    boxShadow: "0 0 20px orange",
  },
});

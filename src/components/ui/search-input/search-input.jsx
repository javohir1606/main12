import { InputAdornment, TextField } from "@mui/material";
import { SearchInputWrapper } from "./style";
import { SearchIcon } from "../../../assets/icons/search";

export const SearchInput = ({ onChange }) => {
  return (
    <SearchInputWrapper flexGrow={1}>
      <TextField
      onChange={onChange}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        fullWidth
        variant="filled"
      />
    </SearchInputWrapper>
  );
};

import { SecondaryButton as StyledSecondaryButton } from "./style";
export const SecondaryButton = (children, onClick, type = "Button") => {
  return (
    <StyledSecondaryButton type={type} onClick={onClick}>
      {children}
    </StyledSecondaryButton>
  );
};

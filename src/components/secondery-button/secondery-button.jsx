import { SecondaryButton as StyledSecondaryButton } from "./style";
export const SecondaryButton = (children, onClick, type = "Button", ...res) => {
  return (
    <StyledSecondaryButton {...res} type={type} onClick={onClick}>
      {children}
    </StyledSecondaryButton>
  );
};

import { useEffect } from "react";

export const useWithoutDivider = () => {
  useEffect(() => {
    const divider = document.querySelector(".Divider");
    divider.hidden = true;

    return () => {
      divider.hidden = false;
    };
  });
};

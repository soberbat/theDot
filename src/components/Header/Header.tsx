import React, { forwardRef } from "react";

interface IHeaderRef {
  innerRef: any;
}

export const HeaderWithRef = forwardRef(function FormField(props, ref: any) {
  return (
    <div
      id="header"
      ref={ref}
      className="absolute z-10 w-full h-10 top-10 bg-purple-50"
    ></div>
  );
});

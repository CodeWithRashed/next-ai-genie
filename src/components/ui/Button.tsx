import { ReactNode } from 'react';
export const ButtonPrimary = ({ children }: { children: ReactNode }) => {
  return (
    <button className="lg:block hidden bg-color-primary hover:bg-color-primary-dark px-5 py-2 rounded-main text-white">
      {children}
    </button>
  );
};
export const ButtonOutline = ({ children }: { children: ReactNode }) => {
  return (
    <button className="lg:block hidden hover:bg-color-primary-light text-color-title  border-2  border-color-primary px-5 py-2 rounded-main transition-all ease-in-out">
       {children}
    </button>
  );
};

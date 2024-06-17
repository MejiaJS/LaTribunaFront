"use client"; // Asegúrate de agregar esto al principio

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from "react";

interface LaTribunaContextProps {
  showModalForm: boolean;
  showLoginForm: boolean;
  showSignupForm: boolean;
  showResetPasswordForm: boolean;
  handleShowModalForm: () => void;
  handleCloseModalForm: () => void;
  handlerForm: (activeForm: string) => void;
}

const LaTribunaContextAuthForm = createContext<
  LaTribunaContextProps | undefined
>(undefined);

export const LaTribunaProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // states
  const [showModalForm, setShowModalForm] = useState<boolean>(false);
  const [activeForm, setActiveForm] = useState<string>("login");
  const [showLoginForm, setShowLoginForm] = useState<boolean>(true);
  const [showSignupForm, setShowSignupForm] = useState<boolean>(false);
  const [showResetPasswordForm, setShowResetPasswordForm] =
    useState<boolean>(false);
  // handlers
  const handleShowModalForm = (): void => setShowModalForm(true);
  const handleCloseModalForm = (): void => setShowModalForm(false);
  const handlerForm = (activeForm: string): void => {
    setActiveForm(activeForm);
  };
  // effects
  useEffect(() => {
    console.log(activeForm);
    switch (activeForm) {
      case "login":
        setShowLoginForm(true);
        setShowSignupForm(false);
        setShowResetPasswordForm(false);
        break;
      case "signup":
        setShowLoginForm(false);
        setShowSignupForm(true);
        setShowResetPasswordForm(false);
        break;
      case "reset":
        setShowLoginForm(false);
        setShowSignupForm(false);
        setShowResetPasswordForm(true);
        break;
      default:
        break;
    }
  }, [activeForm]);
  // value
  const value = useMemo(
    () => ({
      showModalForm,
      showLoginForm,
      showSignupForm,
      showResetPasswordForm,
      handleShowModalForm,
      handleCloseModalForm,
      handlerForm,
    }),
    [showModalForm, showLoginForm, showSignupForm, showResetPasswordForm]
  );

  return (
    <LaTribunaContextAuthForm.Provider value={value}>
      {children}
    </LaTribunaContextAuthForm.Provider>
  );
};

export const useLaTribunaAuthFormContext = (): LaTribunaContextProps => {
  const context = useContext(LaTribunaContextAuthForm);
  if (!context) {
    throw new Error(
      "useLaTribunaAuthFormContext must be used within a LaTribunaProvider"
    );
  }
  return context;
};

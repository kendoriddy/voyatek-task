import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, CircularProgress } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard/payment-in");
    }, 1500);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <TextField id="outlined-basic" label="Business Email" variant="outlined" fullWidth />
          <div className="flex flex-col gap-2">
            <TextField
              id="outlined-password-input"
              label="Enter your password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <span className="flex justify-end text-[#025C56] text-xs font-medium px-[14px]">
              Forgot password?
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className="text-center w-full bg-[#025C56] mt-10 px-6 py-3 rounded-[100px] text-white"
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "Sign in"}
          </button>
          <p className="text-[#025C56] font-medium text-xs text-center">
            Don’t have an account on Project-X? Sign up
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

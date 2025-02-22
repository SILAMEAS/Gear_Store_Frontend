import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
    Button,
    CircularProgress,
    InputAdornment,
    Link,
    Paper,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {useState} from "react";
import {useForm} from "react-hook-form";
import InputText from "../../components/Input/InputText.tsx";
import {Route} from "../../constants/Route.ts";
import useGlobalHook from "../../utils/hooks/useGlobalHook.tsx";
import useAuth, {ILogin} from "../../utils/hooks/useAuth.tsx";
import {validateEmail} from "../../utils/common/validateEmail.ts";
import ButtonContinueAsGuest from "../../components/Button/ButtonContinueAsGuest.tsx";
import ThemeToggle from "../../theme/toggle/ThemeToggle.tsx";

const Login = () => {
    const {navigate}=useGlobalHook();
  const [showPassword, setShowPassword] = useState(true);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const {handleLogin,resultLogin:{isLoading:loginLoading}}=useAuth();

  const formData = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const handleShowPassword = () => (showPassword ? "password" : "text");




  return (
      <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            px: 2
          }}
      >
          <ThemeToggle/>
        <form onSubmit={formData.handleSubmit(handleLogin)} id="login-form" style={{ width: "100%", maxWidth: "400px" }}>
          <Stack spacing={3}>
            <Typography
                variant={isSmallScreen ? "h5" : "h4"}
                sx={{ textAlign: "center", fontWeight: 600 }}
            >
              LOGIN
            </Typography>
            <Stack>
              <Typography variant="body2">Email</Typography>
              <InputText
                  formData={formData}
                  name="email"
                  placeholder="Email"
                  error={formData.formState.errors["email"]}
                  rules={{
                    required: { value: true, message: "Email is required" },
                    validate: (val: string) => validateEmail(val),
                  }}
              />
            </Stack>
            <Stack>
              <Typography variant="body2">Password</Typography>
              <InputText
                  formData={formData}
                  name="password"
                  placeholder="Password"
                  error={formData.formState.errors["password"]}
                  rules={{ required: { value: true, message: "Password is required" } }}
                  inputPropsTextField={{
                    slotProps: {
                      input: {
                        endAdornment: (
                            <InputAdornment
                                position="end"
                                sx={{ cursor: "pointer", height: 10 }}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <VisibilityOff sx={{ width: 20 }} /> : <Visibility sx={{ width: 20 }} />}
                            </InputAdornment>
                        ),
                      },
                    },
                    type: handleShowPassword(),
                  }}
              />
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Link href="#" color="info">
                <Typography variant="body2">Forgot password?</Typography>
              </Link>
              <Link href="#" color="info">
                <Typography variant="body2" onClick={()=>navigate(Route.public.SIGN_UP)}>Sign Up!</Typography>
              </Link>
            </Stack>
            <Stack>
              <Button
                  variant="contained"
                  sx={{
                    boxShadow: "none",
                    textTransform: "none",
                    minHeight: "40px",
                  }}
                  form="login-form"
                  type="submit"
                  disabled={loginLoading}
                  startIcon={loginLoading && <CircularProgress color="inherit" size={20} />}
              >
                {loginLoading ? "Logging..." : "Login"}
              </Button>
                <ButtonContinueAsGuest   onClick={()=>navigate(Route.public.PRODUCT)} />
            </Stack>
          </Stack>
        </form>
      </Paper>
  );
};

export default Login;
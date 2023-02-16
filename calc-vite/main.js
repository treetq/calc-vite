import "./style.css";
import { setupThemeButtons, applyTheme } from "./theme.js";
import { calculatorButtons, setupKeyboard } from "./calculator";

setupThemeButtons();
applyTheme(0);

calculatorButtons();
setupKeyboard();

export const themes = ["dark", "light"] as const;

export type Theme = (typeof themes)[number];

export const THEME_STORAGE_KEY = "theme";

// Corre al inicio de <body>, antes del primer pintado, para evitar el
// destello del tema equivocado: preferencia guardada > preferencia del
// sistema > oscuro.
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){}`;

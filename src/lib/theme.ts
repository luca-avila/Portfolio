export const themes = ["dark", "light"] as const;

export type Theme = (typeof themes)[number];

export const THEME_STORAGE_KEY = "theme";

// Corre al inicio de <body>, antes del primer pintado, para evitar el
// destello del tema equivocado: preferencia guardada > preferencia del
// sistema > oscuro. Además sigue al sistema en vivo: si el dispositivo
// cambia de modo, se aplica ese modo y se descarta la elección manual.
export const themeInitScript = `(function(){
var d=document.documentElement,k="${THEME_STORAGE_KEY}",m=matchMedia("(prefers-color-scheme: light)");
function sys(){return m.matches?"light":"dark"}
try{var t=localStorage.getItem(k);d.dataset.theme=t==="light"||t==="dark"?t:sys()}catch(e){d.dataset.theme=sys()}
m.addEventListener("change",function(){d.dataset.theme=sys();try{localStorage.removeItem(k)}catch(e){}});
})()`;

//Generado por ChatGPT
export const hexToRgba = (hex: string, alpha: number): string => {
    // Elimina el símbolo '#' si está presente
    hex = hex.replace(/^#/, '');

    // Convierte pares de caracteres hexadecimales a valores decimales
    const bigint = parseInt(hex, 16);

    // Extrae los componentes R, G y B
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Calcula el valor de la opacidad (alpha) en el rango de 0 a 1
    const alphaValue = alpha >= 0 && alpha <= 1 ? alpha : 1;

    // Construye la cadena RGBA
    const rgbaString = `rgba(${r}, ${g}, ${b}, ${alphaValue})`;

    return rgbaString;
}
import { endpoint } from "../api/useApi";

export async function downloadMedia(server_path: string, name: string) {
    const link = document.createElement('a');
    link.href = endpoint + server_path;  
    link.download = name;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  
}

export async function copyToClipboard(text: string) {
    try {
        await navigator.clipboard.writeText(text); 
        alert("Link copied to clipboard");
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
}

export function msToTime(ms: number) {
    const date = new Date(ms);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}
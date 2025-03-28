export function formatDuration(seconds: number): string {
  console.log(seconds);
  
  if (seconds > 3600){
    return `${Math.floor(seconds/3600)}h ${Math.floor(seconds%3600/60)}m ${Math.round(seconds%3600%60)}s`;
  }
  if (seconds == 3600){
    return `${seconds/3600}h`;
  }
  else if(seconds < 3600 && seconds > 60){
    return `${Math.round(seconds/60)}m ${seconds%60}s`;
  }
  if (seconds < 60 && seconds > 0){
    return `${Math.round(seconds)}s`;
  }
  else if (seconds == 0){
    return `${seconds}s`;
  }
  if (seconds < 0){
    throw new Error("ERROR");
  }
  throw new Error("not implemented yet");
}

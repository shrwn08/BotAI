export const getCurrentTime = () => {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    return now.toLocaleString('en-US', options);
  };
  
  
  
export const sendEmail = async (messageData: any) => {
  const receivedMessage = messageData;
  return {
    message: "Message sent successful",
    status: 200,
    data: receivedMessage,
  };
};

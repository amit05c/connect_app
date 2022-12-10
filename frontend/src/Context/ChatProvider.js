import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();
  const navigate= useNavigate()
  

  
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const isAuth= JSON.parse(localStorage.getItem("isAuth"))
  
  useEffect(() => {
    setUser(userInfo);

    // if (!userInfo) history.push("/");
    if(!isAuth){
      navigate("/")
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

// export const ChatState = () => {
//   return useContext(ChatContext);
// };

export default ChatProvider;

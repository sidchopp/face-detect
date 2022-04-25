import React, { useState, useContext, useEffect } from 'react';
const AppContext = React.createContext();

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

const metadata = new grpc.Metadata();
metadata.set("authorization", "Key YOUR_CLARIFAI_API_KEY");

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  return <AppContext.Provider value={{ loading }} >{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
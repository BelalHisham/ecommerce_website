import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { CiWarning } from "react-icons/ci";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
            {/* Lable for demo website */}
            <div style={{
              backgroundColor: "red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }} >
                    <CiWarning
                    color="white"
                    size="1.5rem"
                    className="mb-1 animate-pulse "
                    />
                    <p 
                    style={{
                      color: "white",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      marginLeft: "0.5rem",
                    
                    }}
                    >
                    This is a DEMO website no actual products or payments !
                    </p>
                </div>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

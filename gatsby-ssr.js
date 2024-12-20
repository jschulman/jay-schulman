import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script
            key="reveal-id"
            src="https://rest.revealid.xyz/v3/script?clientId=3eB2HZ25z3S5XX9dHazKNm&version=4.0.0"
            async
        />,
        <script
            key="reveal-id-init"
            dangerouslySetInnerHTML={{
                __html: `
          window.onload = function() {
            if (typeof Reveal !== 'undefined') {
              new Reveal.default();
            }
          };
        `
            }}
        />
    ])
} 
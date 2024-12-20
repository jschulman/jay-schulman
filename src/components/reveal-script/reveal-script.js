import React from "react"
import { Helmet } from "react-helmet"

const RevealScript = () => (
    <Helmet>
        <script type="text/javascript">
            {`
        !function(){var e='rest.revealid.xyz/v3/script?clientId=3eB2HZ25z3S5XX9dHazKNm&version=4.0.0',
        t=document.createElement('script');window.location.protocol.split(':')[0];
        t.src='https://'+e;var c=document.getElementsByTagName('script')[0];
        t.async = true;
        t.onload = function(){ new Reveal.default };
        c.parentNode.insertBefore(t,c)}();
      `}
        </script>
    </Helmet>
)

export default RevealScript 
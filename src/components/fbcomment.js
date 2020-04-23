import React, { useEffect } from "react";

const FbComment = () => {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "xxxxxxxxx",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v3.0",
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  useEffect(() => {
    window.FB.XFBML.parse();
  });

  return (
    <div
      className="fb-comments"
      data-href="http://localhost:3000/episode/details"
      data-numposts="5"
      data-width=""
    ></div>
  );
};
export default FbComment;

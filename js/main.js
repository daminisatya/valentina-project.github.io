$( document ).ready(function() {

  /* OS Detection */

  console.log("OS : ", jscd.os, "version", jscd.osVersion, "is 64 OS : ", is64OS());

  var downloadType = undefined;
  if(jscd.os.indexOf("Windows")>-1) downloadType = "Windows";
  else if(jscd.os.indexOf("Mac")>-1) downloadType = "Mac";
  else if(jscd.os.indexOf("Linux")>-1) downloadType = "Linux";

  function is64OS() {
      return navigator.userAgent.indexOf('WOW64')>-1 || window.navigator.platform=='Win64' || navigator.userAgent.indexOf('x86_64')>-1;
  };

  /* Downloads */

  $("#downloads").hide();
  $(".more-downloads").click(function(e){
    e.preventDefault();
    console.log("clicked");
    $("#downloads").slideToggle("fast");
  })

  // console.log(downloadType)
  // console.log(downloads)
  //
  // // downloads.downloads.forEach(function(d){
  // //   if(d.family == downloadType && downloadType == ("Windows" || "Mac")) {
  // //     console.log(d)
  // //   } else {
  // //     // console.log("linux",d)
  // //     $(".download").hide();
  // //     $("#downloads").show();
  // //   }
  // // })

  /* Features Screenshots */
  //PrettyPhoto
  $("a.preview").prettyPhoto({
    social_tools: false
  });

  // Gif Player
  Gifffer();


})

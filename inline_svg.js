Reveal.getSlides().forEach(function(s){
  s.querySelectorAll("object").forEach(function(e) {
    var params;
    params = e.querySelectorAll("param");
    //replacing object with inline svg
    if (e.contentDocument)
       e.parentElement.replaceChild(e.contentDocument.documentElement.cloneNode(true), e);
    //Setting "preserveAspectRatio" for each SVG to scale correctly
    s.querySelectorAll("svg").forEach(function(e){
      e.setAttribute("preserveAspectRatio","xMinYMin meet");
    });
    //applying formating according to params
    params.forEach(function(p){
      var svg_e;
      //get svg element with the same id
      svg_e = s.querySelector("#".concat(p.getAttribute("id")));
      //apply the attributes of the param element to the svg element
      var attrs = p.attributes;
      for(var i = attrs.length - 1; i >= 0; i--) {
        if (attrs[i].name!="id")
         svg_e.setAttribute(attrs[i].name, attrs[i].value);
       }
    });
  });
});

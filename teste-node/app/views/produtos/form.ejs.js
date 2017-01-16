lang;
"en" >
    charset;
"UTF-8" >
    Insert;
Form < /title>
    < /head>
    < body
    < div;
var default_1 = (function () {
    function default_1() {
    }
    return default_1;
}());
'errors' >
     % ;
if (errorsValidation) {
     %  >
         % ;
    for (var i = 0; i < errorsValidation.length; i++) {
         %  >
        ;
        errorsValidation[i].param %  > -;
        errorsValidation[i].msg %  > /li>
            <  % ;
    }
     %  >
        /ul>
        <  % ;
}
 %  >
    /div>
    < form;
action = "/produtos";
method = "post" >
;
for ( = "nome" > Nome < /label>
    < input; type = "text"; id = "nome")
    value = "<%=produto.nome%>";
name = "nome";
placeholder = "Coloque o nome do livro" /  >
    /div>
    < input;
type = "submit";
value = "Gravar" >
    /form>
    < /body>
    < /html>;

var time = 0;

$("document").ready(
    function(evt)
    {
        start();   
        
        $("#shoutbox").submit(
            function()
            {
                
                let message = document.getElementById("messages");
                message.style.color = "red";

                if($("#text").val() == "" && $("#nick").val() == "")
                    {
                        message.innerHTML = "*You must enter a text message nad nickname!";
                    }
                
                else if($("#text").val() != "" && $("#nick").val() == "")
                    {
                        message.innerHTML = "*You must enter a nickname!";
                    }
                else if($("#text").val() == "" && $("#nick").val() != "")
                    {
                        message.innerHTML = "*You must enter a text message!";
                    }
                else if($("#text").val() != "" && $("#nick").val() != "")
                    {
                        
                        $.post("php/getData.php", {
                            "text": $("#text").val(),
                            "nick": $("#nick").val(),
                            "time": time,
                            "action": "post"
                        },
                        function(daneXML)
                        {
                            message.style.color = "#fff";
                            addMessage(daneXML);
                        });
                    }
                else
                    {
                        message.innerHTML = "";
                    }
                
                $("#text").val('');
                return false;
            }
        );
        
        updateMessage();
    }
);

function updateMessage()
{
    $.post("php/getData.php", {"time": time},
        function(daneXML)
        {
            addMessage(daneXML);
        }
    );
    
    setTimeout(updateMessage, 2000);
}
function addMessage(daneXML)
{
       
    if($("status", daneXML).text() == "0") return;
    
    var wiadomosci = $("wiadomosc", daneXML);
    
    time = $("timestamp", daneXML).text();
    wiadomosci.each(
        function(i)
        {
            var nick = $("nick", this);
            var tresc = $("tresc", this);
            var czas = $("czas", this);
            $("#messages").prepend("["+czas.text()+"] [<b>"+nick.text()+"</b>] "+tresc.text()+"</br>");
            
        }
    );
}

function start()
{
     $.post("php/view.php",
        function(daneXML)
        {

            var wiadomosci = $("wiadomosc", daneXML);

            wiadomosci.each(
                function(i)
                {
                    var nick = $("nick", this);
                    var tresc = $("tresc", this);
                    var czas = $("czas", this);
                    $("#messages").prepend("["+czas.text()+"] [<b>"+nick.text()+"</b>] "+tresc.text()+"</br>");

                }
            );
        }      
    );
}
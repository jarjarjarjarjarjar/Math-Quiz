function adduser()
{
        player1name = document.getElementById("1nameinput").value
        player2name = document.getElementById("2nameinput").value
        localStorage.setItem("player1name",player1name)
        localStorage.setItem("player2name",player2name)
        window.location="html2.html"    
}
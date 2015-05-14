//document.onload = function() {

function rollDie()
{
  return Math.floor(Math.random() * (20)) + 1;
}

function dieroll(pos)
{
  for (var i = 12; i > 0; i -- )
  {
    document.getElementById(i).textContent = "";
  }
  for (var i = pos; i > 0; i -- )
  {
   document.getElementById(i).textContent = rollDie();
  }
};

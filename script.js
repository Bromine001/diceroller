
function rollDie()
{
  return Math.floor(Math.random() * (6)) + 1;
}

function blankDie(pos)
{
    var x = document.getElementById(pos);
    x.src = 'pics/blank.jpg';


        switch(rollDie())
      {
      case 1:
          x.src = "pics/blank.jpg";
          break;
      case 2:
          x.src = "pics/blank.jpg";
          break;
      case 3:
          x.src = "pics/blank2.jpg";
          break;
      case 4:
          x.src = "pics/blank3.jpg";
          break;
      case 5:
          x.src = "pics/blank4.jpg";
          break;
      case 6:
          x.src = "pics/blank5.jpg";
          break;
      }
}


function blueDie(pos)
{
    var x = document.getElementById(pos);
    x.src = 'pics/blank.jpg';

    setTimeout(function()
    {
        switch(rollDie())
      {
      case 1:
          x.src = "pics/blue1.jpg";
          break;
      case 2:
          x.src = "pics/blue2.jpg";
          break;
      case 3:
          x.src = "pics/blue3.jpg";
          break;
      case 4:
          x.src = "pics/blue4.jpg";
          break;
      case 5:
          x.src = "pics/blue5.jpg";
          break;
      case 6:
          x.src = "pics/blue6.jpg";
          break;
      }
    }, 150);
}

function yellowDie(pos)
{
    var x = document.getElementById(pos);
    x.src = 'pics/blank.jpg';
    
    setTimeout(function()
    {    switch (rollDie())
    {
    case 1:
        x.src = "pics/yel1.jpg";
        break;
    case 2:
        x.src = "pics/yel2.jpg";
        break;
    case 3:
        x.src = "pics/yel3.jpg";
        break;
    case 4:
        x.src = "pics/yel4.jpg";
        break;
    case 5:
        x.src = "pics/yel5.jpg";
        break;
    case 6:
        x.src = "pics/yel6.jpg";
        break;
    }
    }, 250);
}

function redDie(pos)
{
    var x = document.getElementById(pos);
    x.src = 'pics/blank.jpg';
    
    setTimeout(function()
    {    switch (rollDie())
    {
    case 1:
        x.src = "pics/red1.jpg";
        break;
    case 2:
        x.src = "pics/red2.jpg";
        break;
    case 3:
        x.src = "pics/red2.jpg";
        break;
    case 4:
        x.src = "pics/red2.jpg";
        break;
    case 5:
        x.src = "pics/red5.jpg";
        break;
    case 6:
        x.src = "pics/red6.jpg";
        break;
    }
        }, 250);

}

function brownDie(pos)
{
    var x = document.getElementById(pos);
    x.src = 'pics/blank.jpg';
    
    setTimeout(function()
    {    switch (rollDie())
    {
    case 1:
        x.src = "pics/brown1.jpg";
        break;
    case 2:
        x.src = "pics/brown1.jpg";
        break;
    case 3:
        x.src = "pics/brown1.jpg";
        break;
    case 4:
        x.src = "pics/brown4.jpg";
        break;
    case 5:
        x.src = "pics/brown4.jpg";
        break;
    case 6:
        x.src = "pics/brown6.jpg";
        break;
    }
        }, 250);

}

function greyDie(pos)
{
    var x = document.getElementById(pos);
    x.src = 'pics/blank.jpg';
    
    setTimeout(function()
    {    switch (rollDie())
    {
    case 1:
        x.src = "pics/grey1.jpg";
        break;
    case 2:
        x.src = "pics/grey2.jpg";
        break;
    case 3:
        x.src = "pics/grey2.jpg";
        break;
    case 4:
        x.src = "pics/grey2.jpg";
        break;
    case 5:
        x.src = "pics/grey5.jpg";
        break;
    case 6:
        x.src = "pics/grey6.jpg";
        break;
    }
        }, 250);

}

function blackDie(pos)
{
    var x = document.getElementById(pos);
    x.src = 'pics/blank.jpg';
    
    setTimeout(function()
    {    switch (rollDie())
    {
    case 1:
        x.src = "pics/black1.jpg";
        break;
    case 2:
        x.src = "pics/black2.jpg";
        break;
    case 3:
        x.src = "pics/black2.jpg";
        break;
    case 4:
        x.src = "pics/black2.jpg";
        break;
    case 5:
        x.src = "pics/black5.jpg";
        break;
    case 6:
        x.src = "pics/black6.jpg";
        break;
    }
        }, 250);

}

function greenDie(pos)
{
    var x = document.getElementById(pos);
    x.src = 'pics/blank.jpg';
    
    setTimeout(function()
    {    switch (rollDie())
    {
    case 1:
        x.src = "pics/green1.jpg";
        break;
    case 2:
        x.src = "pics/green2.jpg";
        break;
    case 3:
        x.src = "pics/green2.jpg";
        break;
    case 4:
        x.src = "pics/green2.jpg";
        break;
    case 5:
        x.src = "pics/green5.jpg";
        break;
    case 6:
        x.src = "pics/green6.jpg";
        break;
    }
        }, 250);

}
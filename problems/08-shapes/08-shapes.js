/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) 
{
  let str = ""
  let num = height/2
  switch (shape)
  {
    case "Square":
    {
      for(let i=0;i<height;i++)
      {
        for(let j=0; j<height;j++)
        {
          str += character
        }
        console.log(str)
        str=""
      }
    }
    break

    case "Triangle":
    {
      for(let i=0;i<height;i++)
      {
        for(let j=0; j<= i;j++)
        {
          str += character
        }
        console.log(str)
        str=""
      }
    }
    break

    case "Diamond":
      {
        let spc = height
        //Outer for loop draws each completed row
        for(let i=0;i<height;i++)
        {
          //add the spaces before drawing the symbol
          for(let j=0; j<spc;j++)
            {
              str+=" ";
            }

            spc--
          //this draws the symbol
          for(let j=0; j<2*i-1;j++)
            {
              str+=character;
            }
        str+="\n"
        }

        spc = 0
        for(let i=0;i<height;i++)
        {
          for(let j=0; j<spc;j++)
          {
            str+=" "
          }

          spc++

          for(let j=0; j<2*(height-i)-1;j++)
          {
            str+= character
          }
          str+="\n"
        }
        console.log(str)
      }
    }//end of switch
  }// end of function



printShape("Square", 5, '%')
printShape("Triangle", 5, '$')
printShape("Diamond", 5, '*')


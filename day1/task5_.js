//writea fun that receives 3 number args and return the bfunctioo
function arg(a,b,c)
{
    if(a>b&&a>c)
    {
        return a;
    }
    else if(b>c&&b>a)
    {
        return b;
    }
    else{
        return c;
    }
}

let result=arg(1,2,3)
console.log(result)
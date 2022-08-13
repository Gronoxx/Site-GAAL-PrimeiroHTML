





window.onload = function(){
    const properties = document.getElementById("properties");
    const canvas = document.getElementById("Canvas");
    const ctx = canvas.getContext("2d");
    
    ctx.lineWidth = 3;
    
    ctx.fillStyle= "white";
    ctx.beginPath();
    ctx.arc(250,250,1,0,2*Math.PI);
    ctx.fill();
   /* ctx.beginPath();
    ctx.arc(250-2.910*5,250+0.7276*-5,1,0,2*Math.PI);
    ctx.fill();*/
    window.gcd = function(a, b) {
        if (a == 0)
            return b;
        return gcd(b % a, a);
    }
    window.spliceString= function(str, index, count, add) {
        var ar = str.split('');
        ar.splice(index, count, add);
        return ar.join('');
      }
   

    function FocusandVertex(a,b,c,P,tp,x2,y2,type)
    {
        let scale;
            let Focus1x1;
            let Focus1y1;
            let Focus2x1;
            let Focus2y1;

            let Vertex1x1;
            let Vertex1y1;
            let Vertex2x1;
            let Vertex2y1;
         if(tp==1)
        {
             Focus1x1= c-x2;
             Focus1y1= -1*y2;
             Focus2x1= -c-x2;
             Focus2y1= -1*y2;

             Vertex1x1= a-x2;
             Vertex1y1= -1*y2;
             Vertex2x1= -a-x2;
             Vertex2y1= -1*y2;
        }

        else if(tp==2)
        {
             Focus1x1= -1*x2;
             Focus1y1= c-y2;
             Focus2x1= -1*x2;
             Focus2y1= -c-y2;

             Vertex1x1= -1*x2;
             Vertex1y1= a-y2;
             Vertex2x1= -1*x2;
             Vertex2y1= -a-y2;
        }
      
        const Focus1x= (P[0][0]*Focus1x1)+(P[0][1]*Focus1y1);
        const Focus1y= (P[1][0]*Focus1x1)+(P[1][1]*Focus1y1);
        const Focus2x= (P[0][0]*Focus2x1)+(P[0][1]*Focus2y1);
        const Focus2y= (P[1][0]*Focus2x1)+(P[1][1]*Focus2y1);
        const Vertex1x= (P[0][0]*Vertex1x1)+(P[0][1]*Vertex1y1);
        const Vertex1y= (P[1][0]*Vertex1x1)+(P[1][1]*Vertex1y1);
        const Vertex2x= (P[0][0]*Vertex2x1)+(P[0][1]*Vertex2y1);
        const Vertex2y= (P[1][0]*Vertex2x1)+(P[1][1]*Vertex2y1);
        properties.innerHTML+=("O <p1>foco 1</p1> em xy e: (<p2>"  + Focus1x+","+Focus1y+" </p2>)<p></p>");
        properties.innerHTML+=("O <p1>foco 2</p1> em xy e: (<p2>" + Focus2x+","+Focus2y+"</p2>)<p></p>");
        properties.innerHTML+=("O <p1>vértice 1</p1> em xy e: (<p2>" + Vertex1x+","+Vertex1y+"</p2>)<p></p>");
        properties.innerHTML+=("O <p1>vértice 2</p1> em xy e: (<p2>" + Vertex2x+","+Vertex2y+"</p2>)<p></p>");
        scale=Vertex1x;
        if(Vertex1y>scale)
        scale=Vertex1y;
        if(Vertex2x>scale)
        scale=Vertex2x;
        if(Vertex2y>scale)
        scale=Vertex2y;
        //ADICIONAR CALCULO DE ASSINTOTA
        if(type=="Ellipse")
        {
            const Vertex3x1= -1*x2;
            const Vertex3y1= b-y2;
            const Vertex4x1= -1*x2;
            const Vertex4y1= -b-y2;
            const Vertex3x= (P[0][0]*Vertex3x1)+(P[0][1]*Vertex3y1);
            const Vertex3y= (P[1][0]*Vertex3x1)+(P[1][1]*Vertex3y1);
            const Vertex4x= (P[0][0]*Vertex4x1)+(P[0][1]*Vertex4y1);
            const Vertex4y= (P[1][0]*Vertex4x1)+(P[1][1]*Vertex4y1);
            properties.innerHTML+=("O <p1>vértice 3</p1> em xy e: (<p2>" + Vertex3x+","+Vertex3y+"</p2>)<p></p>");
            properties.innerHTML+=("O <p1>vértice 4</p1> em xy e: (<p2>" + Vertex4x+","+Vertex4y+"</p2>)<p></p>");
        if(Vertex3x>scale)
        scale=Vertex3x;    
        if(Vertex3y>scale)
        scale=Vertex3y;
        if(Vertex4x>scale)
        scale=Vertex4x;
        if(Vertex4y>scale)
        scale=Vertex4y;
        }
        return scale;
    }
    function drawAxes()
    {
        for(let i=0;i<=250;i=i+0.01)
        {
        ctx.fillStyle= "#00ffff";
        ctx.beginPath();
        ctx.arc(250+i*10,250,1,0,2*Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(250,250-i*-10,1,0,2*Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(250+i*-10,250,1,0,2*Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(250,250+i*-10,1,0,2*Math.PI);
        ctx.fill();
        }
    }
    function Mathfunctionellipse2(a,b,P,tp,x2value,y2value,type)
    {
        if(x2value>0)
        properties.innerHTML+=`<p> Transformação de <p1>x1</p1> para <p1>x2</p1>:<p2>(x1+${x2value})</p2> </p>`;
        else if(x2value<0)
        properties.innerHTML+=`<p> Transformação de <p1>x1</p1> para <p1>x2</p1>:<p2>(x1${x2value})</p2> </p>`;
        if(y2value>0)
        properties.innerHTML+=`<p> Transformação de <p1>y1</p1> para <p1>y2</p1>:<p2>(y1+${y2value})</p2> </p>`;
        else if(y2value<0)
        properties.innerHTML+=`<p> Transformação de <p1>y1</p1> para <p1>y2</p1>:<p2>(y1${y2value})</p2> </p>`;
        let x1,y1,x,y;
        let aux=(a*a)-(b*b);
        if((aux)%1<0.01 && (aux)%1>0 )
        aux=(aux)-((aux)%1);
        if((aux)%1>0.99  && (aux)%1<1)
        aux=(aux)+(1-((aux)%1));
        let c=Math.sqrt(aux);
        if(c%1==0)
        {
            properties.innerHTML+=`<p> O valor de <p1>c</p1> é <p2>${c}</p2> </p>`;
        }
        else
        {
            properties.innerHTML+=`<p> O valor de <p1>c</p1> é <p2>√${aux}</p2> </p>`;
        }
        const scale=250/(FocusandVertex(a,b,c,P,tp,x2value,y2value,type)*1.1);
        if(tp==1)
        {        
            

        for(let i=-scale;i<=scale; i=i+0.001)
       {
        x2=i;
        y2=Math.sqrt(b*b-((b*b*x2*x2)/(a*a)));
        x1=x2-x2value;
        y1=y2-y2value;
        // coordinate (x1,y1)
        //P*(x1,y1)
        
        x=(P[0][0]*x1)+(P[0][1]*y1);
        y=(P[1][0]*x1)+(P[1][1]*y1);
        ctx.fillStyle= "white";
        ctx.beginPath();
        ctx.arc(250+x*scale,250+y*-scale,1,0,2*Math.PI);
        ctx.fill();

        x2=i;
        y2=-Math.sqrt(b*b-((b*b*x2*x2)/(a*a)));
        x1=x2-x2value;
        y1=y2-y2value;
        x=(P[0][0]*x1)+(P[0][1]*y1);
        y=(P[1][0]*x1)+(P[1][1]*y1);
        ctx.beginPath();
        ctx.arc(250+x*scale,250+y*-scale,1,0,2*Math.PI);
        ctx.fill();
       }
        }
        else if(tp==2)
        {
            
            for(let i=-scale;i<=scale; i=i+0.001)
            {
             x2=i;
             y2=Math.sqrt(a*a-((a*a*x2*x2)/(b*b)));
             x1=x2-x2value;
             y1=y2-y2value;
             // coordinate (x1,y1)
             //P*(x1,y1)
             
             x=(P[0][0]*x1)+(P[0][1]*y1);
             y=(P[1][0]*x1)+(P[1][1]*y1);
             ctx.beginPath();
             ctx.arc(250+x*scale,250+y*-scale,1,0,2*Math.PI);
             ctx.fill();

             x2=i;
             y2=-Math.sqrt(a*a-((a*a*x2*x2)/(b*b)));
             x1=x2-x2value;
             y1=y2-y2value;
             // coordinate (x1,y1)
             //P*(x1,y1)
             
             x=(P[0][0]*x1)+(P[0][1]*y1);
             y=(P[1][0]*x1)+(P[1][1]*y1);
             ctx.fillStyle= "white";
             ctx.beginPath();
             ctx.arc(250+x*scale,250+y*-scale,1,0,2*Math.PI);
             ctx.fill();
            }  
        }
        drawAxes();
        

    }

    function Mathfunctionhyperbola2(a,b,P,tp,x2value,y2value,type) // Mathematical function hyperbola when x<0 pode usar para 
    //hyperbola 1 mas troca as entradas a e b, tbm pode aumentar uma entrada para identificação ultima
    // varaivel sendo 1 ou 2 dependendo do tipo
    {
        if(x2value>0)
        properties.innerHTML+=`<p> Transformação de <p1>x1</p1> para <p1>x2</p1>:<p2>(x1+${x2value})</p2> </p>`;
        else if(x2value<0)
        properties.innerHTML+=`<p> Transformação de <p1>x1</p1> para <p1>x2</p1>:<p2>(x1${x2value})</p2> </p>`;
        if(y2value>0)
        properties.innerHTML+=`<p> Transformação de <p1>y1</p1> para <p1>y2</p1>:<p2>(y1+${y2value})</p2> </p>`;
        else if(y2value<0)
        properties.innerHTML+=`<p> Transformação de <p1>y1</p1> para <p1>y2</p1>:<p2>(y1${y2value})</p2> </p>`;
        let x1,y1,x,y;
        let aux=(a*a)+(b*b);
        if((aux)%1<0.01 && (aux)%1>0 )
        aux=(aux)-((aux)%1);
        if((aux)%1>0.99  && (aux)%1<1)
        aux=(aux)+(1-((aux)%1));
        let c=Math.sqrt(aux);
        if(c%1==0)
        {
            properties.innerHTML+=`<p> O valor de <p1>c</p1> é <p2>${c}</p2> </p>`;
        }
        else
        {
            properties.innerHTML+=`<p> O valor de <p1>c</p1> é <p2>√${aux}</p2> </p>`;
        }
        const scale=50/a;

        if(tp==1)
        {
        for(let i=-scale;i<=scale; i=i+0.001)
       {
        x2=i;
        y2=Math.sqrt(-b*b+((b*b*x2*x2)/(a*a)));
        x1=x2-x2value;
        y1=y2-y2value;
        // coordinate (x1,y1)
        //P*(x1,y1)
        
        x=(P[0][0]*x1)+(P[0][1]*y1);
        y=(P[1][0]*x1)+(P[1][1]*y1);
        ctx.fillStyle= "white";
        ctx.beginPath();
        ctx.arc(250+x*scale,250+y*-scale,1,0,2*Math.PI);
        ctx.fill();

        y1=-y2-y2value;
        // coordinate (x1,y1)
        //P*(x1,y1)
        
        x=(P[0][0]*x1)+(P[0][1]*y1);
        y=(P[1][0]*x1)+(P[1][1]*y1);
        ctx.fillStyle= "white";
        ctx.beginPath();
        ctx.arc(250+x*scale,250+y*-scale,1,0,2*Math.PI);
        ctx.fill();
    
       }
        }
        else if(tp==2)
        {
        for(let i=-scale;i<=scale; i=i+0.001)
       {
        x2=i;
        y2=Math.sqrt(a*a+((a*a*x2*x2)/(b*b)));
        x1=x2-x2value;
        y1=y2-y2value;
        // coordinate (x1,y1)
        //P*(x1,y1)
        
        x=(P[0][0]*x1)+(P[0][1]*y1);
        y=(P[1][0]*x1)+(P[1][1]*y1);
        ctx.fillStyle= "white";
        ctx.beginPath();
        ctx.arc(250+x*scale,250+y*-scale,1,0,2*Math.PI);
        ctx.fill();
        y1=-y2-y2value;
        // coordinate (x1,y1)
        //P*(x1,y1)
        
        x=(P[0][0]*x1)+(P[0][1]*y1);
        y=(P[1][0]*x1)+(P[1][1]*y1);
        ctx.beginPath();
        ctx.arc(250+x*scale,250+y*-scale,1,0,2*Math.PI);
        ctx.fill();
       }
        }
        drawAxes();
        FocusandVertex(a,b,c,P,tp,x2value,y2value,type);
       
        
    }
    
    function Mathfunctionparabola2(P,p,xvaluesquare,yvaluesquare,x2value,y2value){
        
        const xorigin = ((x2value*-1)*P[0][0])+((y2value*-1)*P[0][1]);
        const yorigin = ((x2value*-1)*P[1][0])+((y2value*-1)*P[1][1]);
        properties.innerHTML+=`<p> <p1>Vértice:</p1> <p><p2>${xorigin} ${yorigin}</p2></p> </p>`;
        if(x2value>0)
        properties.innerHTML+=`<p> Transformação de <p1>x1</p1> para <p1>x2</p1>:<p2>(x1+${x2value})</p2> </p>`;
        else if(x2value<0)
        properties.innerHTML+=`<p> Transformação de <p1>x1</p1> para <p1>x2</p1>:<p2>(x1${x2value})</p2> </p>`;
        if(y2value>0)
        properties.innerHTML+=`<p> Transformação de <p1>y1</p1> para <p1>y2</p1>:<p2>(y1+${y2value})</p2> </p>`;
        else if(y2value<0)
        properties.innerHTML+=`<p> Transformação de <p1>y1</p1> para <p1>y2</p1>:<p2>(y1${y2value})</p2> </p>`;
        /*
        (x1+x1value)^2= 4*p*(y1+y1value)
        y2= x2^2/4p
        y1+y1value=(x1+x1value)^2 /4p -> supor valores para x1 encontrar o y1 e transformar em x y
        const xorigin = ((x1value*-1)*P[0][0])+((y1value*-1)*P[0][1]); -> vertice
        const yorigin = ((x1value*-1)*P[1][0])+((y1value*-1)*P[1][1]); -> vertice
        */
        if(yvaluesquare==0)
        {
        for(let i=-25;i<=25; i=i+0.001)
        {
         x1=i;
         y1=((((x1+x2value)*(x1+x2value))/4*p)-y2value);
         
         x=(P[0][0]*x1)+(P[0][1]*y1);
         y=(P[1][0]*x1)+(P[1][1]*y1);
         ctx.fillStyle= "white";
         
         ctx.beginPath();
         ctx.arc(250+x*10,250+y*-10,1,0,2*Math.PI);
         ctx.fill();
        }
        const focusx = ((x2value*-1)*P[0][0])+((p-y2value)*P[0][1]);
        const focusy = ((x2value*-1)*P[1][0])+((p-y2value)*P[1][1]);
        properties.innerHTML+=`<p> <p1>Foco</p1> é <p2>${focusx} ${focusy}</p2> </p>`;
    }
    else if(xvaluesquare==0)
    {
        for(let i=-25;i<=25; i=i+0.001)
        {
            x1=i;
            y1=Math.sqrt(4*p*(x1+x2value))
            x=(P[0][0]*x1)+(P[0][1]*y1);
            y=(P[1][0]*x1)+(P[1][1]*y1);
            ctx.fillStyle= "white";
            ctx.beginPath();
            ctx.arc(250+x*10,250+y*-10,1,0,2*Math.PI);
            ctx.fill(); 

            x=(P[0][0]*x1)+(P[0][1]*-y1);
            y=(P[1][0]*x1)+(P[1][1]*-y1);
            ctx.fillStyle= "white";
            ctx.beginPath();
            ctx.arc(250+x*10,250+y*-10,1,0,2*Math.PI);
            ctx.fill();
           }
           const focusx = ((p-x2value)*P[0][0])+((y2value*-1)*P[0][1]);
           const focusy = ((p-x2value)*P[1][0])+((y2value*-1)*P[1][1]);
           properties.innerHTML+=`<p> <p1>Foco</p1> é <p2>${focusx} ${focusy}</p2> </p>`;
    }
    drawAxes();

    }

class Fração
{constructor(n, d){
    this.fractionn = n;
    this.fractiond = d;
}

}
class ab
{constructor(a,b){
    this.insidea = a;
    this.insideb = b;
}}
function part1(eigenvalueA1,eigenvalueA2,fvalue,P,KP)
{
const x2value= KP[0]/(2*eigenvalueA1);
const y2value =KP[1]/(2*eigenvalueA2);
fvalue=fvalue-(eigenvalueA1*((KP[0]/(2*eigenvalueA1))*(KP[0]/(2*eigenvalueA1))))-(eigenvalueA2*((KP[1]/(2*eigenvalueA2))*(KP[1]/(2*eigenvalueA2))));
part2(eigenvalueA1,eigenvalueA2,fvalue,P,x2value,y2value);
}

function part2(xvalue,yvalue,fvalue,P,x2,y2)
{
   if(xvalue%1<0.01 && xvalue%1>0 )
    xvalue=xvalue-(xvalue%1);
    if(xvalue%1>0.99  && xvalue%1<1)
    xvalue=xvalue+(1-(xvalue%1));
    if(yvalue%1<0.01 && yvalue%1>0) 
    yvalue=yvalue-(yvalue%1);
    if(yvalue%1>0.99  && yvalue%1<1)
    yvalue=yvalue+(1-(yvalue%1));
    if(fvalue%1<0.01 && fvalue%1>0)
    fvalue=fvalue-(fvalue%1);
    if(fvalue%1>0.99 && fvalue%1<1)
    fvalue=fvalue+(1-(fvalue%1));
    

    if(-xvalue%1<0.01)
    xvalue=xvalue-(xvalue%1);
    if(-xvalue%1>0.99  && -xvalue%1<1)
    xvalue=xvalue-(1+(xvalue%1))
    if(-yvalue%1<0.01)
    yvalue=yvalue-(yvalue%1);
    if(-yvalue%1>0.99  && -yvalue%1<1)
    yvalue=yvalue-(1+(yvalue%1));
    if(-fvalue%1<0.01)
    fvalue=fvalue-(fvalue%1);
    if(-fvalue%1>0.99 && -fvalue%1<1)
    fvalue=fvalue-(1+(fvalue%1));
    

    let type,tp;
    
    if(fvalue>0)
    {
        xvalue = xvalue*-1; yvalue = yvalue*-1; 
    }
    else
    {
        fvalue=fvalue*-1;
    }
    fvalueholder=fvalue;
    //ELLIPSE SECTION
    //Ellipse 1
    if(xvalue>0 && yvalue>0)
   {
        let a,b;
    if(xvalue<yvalue) //a embaixo do x
    {
        tp=1;
        type= "Ellipse";
        
        if(fvalue%xvalue==0)
        {
            a=Math.sqrt(fvalue/xvalue);
            if(Math.sqrt(fvalue/xvalue)%1==0)
            {
                properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${a}</p2></p>`;
            }else{
            properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>√${fvalue/xvalue}</p2></p>`;
            }
            properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${fvalue/xvalue}</p2></p>`;
              
            
        }
         if(fvalue%yvalue==0)
        {
            b=Math.sqrt(fvalue/yvalue);
            if(Math.sqrt(fvalue/yvalue)%1==0)
            {
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${b}</p2></p>`;
            }else{
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>√${fvalue/yvalue}</p2></p>`;
            }
            properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${fvalue/yvalue}</p2></p>`;   
        }
        if(fvalue%xvalue!=0)
        {
            if(fvalue%1==0 && xvalue%1==0)
            {
            const divider=gcd(fvalue,xvalue);
            fvalue=fvalue/divider;
            xvalue=xvalue/divider;
            }
        
        

            const asquare = new Fração(fvalue,xvalue);//b^2
                if(Math.sqrt(asquare.fractionn)%1==0)
            {
                if(Math.sqrt(asquare.fractiond)%1==0)
                {
                    properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${Math.sqrt(asquare.fractionn)} / ${Math.sqrt(asquare.fractiond)}</p2></p>`;
                    properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
                }
                else
                {
                    properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${Math.sqrt(asquare.fractionn)} / √(${asquare.fractiond})`;
                    properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
                }
            }
            else if(Math.sqrt(asquare.fractionn)%1!=0 && Math.sqrt(asquare.fractiond)%1==0)
            {
                properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>√(${asquare.fractionn}) / ${Math.sqrt(asquare.fractiond)}</p2></p>`;
                properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
            }   
            else
            {
                properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>√(${asquare.fractionn} / ${asquare.fractiond})</p2></p>`;
                properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
            }
            a= Math.sqrt(fvalue/xvalue);
        }
        if(fvalue%yvalue!=0)
        {
            fvalue=fvalueholder;
            if(fvalue%1==0 && yvalue%1==0)
            {
            const divider=gcd(fvalue,yvalue);
            fvalue=fvalue/divider;
            xvalue=yvalue/divider;
            }
            const bsquare = new Fração(fvalue,yvalue);//b^2
                if(Math.sqrt(bsquare.fractionn)%1==0)
            {
                if(Math.sqrt(bsquare.fractiond)%1==0)
                {
                    properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${Math.sqrt(bsquare.fractionn)} / ${Math.sqrt(bsquare.fractiond)}</p2></p>`;
                    properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`;
                }
                else
                {
                    properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${Math.sqrt(bsquare.fractionn)} / √(${bsquare.fractiond})}</p2></p>`;
                    properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`;
                }
            }
            else if(Math.sqrt(bsquare.fractionn)%1!=0 && Math.sqrt(bsquare.fractiond)%1==0)
            {
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>√(${bsquare.fractionn}) / ${Math.sqrt(bsquare.fractiond)}</p2></p>`;
                properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`;
            }
            else
            {
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>√(${bsquare.fractionn} / ${bsquare.fractiond})</p2></p>`;
                properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`
            }
            b= Math.sqrt(fvalue/yvalue); 
        }
        properties.innerHTML+=`<p><p1>Equação</p1>: <p><p2>x^2/${a*a} +y^2/${b*b} = 1 </p></p2></p>`;
    }
    //Ellipse 2
    else // a embaixo do y
    {
        tp=2;
        type= "Ellipse";
         if(fvalue%yvalue==0)
        {
            a=Math.sqrt(fvalue/yvalue);
            if(Math.sqrt(fvalue/yvalue)%1==0)
            {
                properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${a}</p2>`;
            }else{
                properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>√${fvalue/yvalue}</p2>`;
            }
            properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${fvalue/yvalue}</p2>`;
            
        }
        if(fvalue%xvalue==0)
        {
            b=Math.sqrt(fvalue/xvalue);
            if(Math.sqrt(fvalue/xvalue)%1==0)
            {
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${b}</p2>`;
            }else{
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>√${fvalue/xvalue}</p2>`;
            }
            properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${fvalue/xvalue}</p2>`; 
        }
         if(fvalue%yvalue!=0)
        {
            if(fvalue%1==0 && yvalue%1==0)
            {
            const divider=gcd(fvalue,yvalue);
            fvalue=fvalue/divider;
            yvalue=yvalue/divider;
            }
            const asquare = new Fração(fvalue,yvalue);//b^2
                if(Math.sqrt(asquare.fractionn)%1==0)
            {
                if(Math.sqrt(asquare.fractiond)%1==0)
                {
                    properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${Math.sqrt(asquare.fractionn)} / ${Math.sqrt(asquare.fractiond)}</p2></p>`;
                    properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
                }
                else
                {
                    properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${Math.sqrt(asquare.fractionn)} / √(${asquare.fractiond})`;
                    properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
                }
            }
            else if(Math.sqrt(asquare.fractionn)%1!=0 && Math.sqrt(asquare.fractiond)%1==0)
            {
                properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>√(${asquare.fractionn})  / ${Math.sqrt(asquare.fractiond)}`;
                properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
            }
            else
            {
                properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>√(${asquare.fractionn} / ${asquare.fractiond})</p2></p>`;
                properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
            }
            a= Math.sqrt(fvalue/yvalue);

        }
        if(fvalue%xvalue!=0)
        {
            fvalue=fvalueholder;
            if(fvalue%1==0 && xvalue%1==0)
            {
            const divider=gcd(fvalue,xvalue);
            fvalue=fvalue/divider;
            xvalue=xvalue/divider;
            }
            const bsquare = new Fração(fvalue,xvalue);//b^2
                if(Math.sqrt(bsquare.fractionn)%1==0)
            {
                if(Math.sqrt(bsquare.fractiond)%1==0)
                {
                    properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${Math.sqrt(bsquare.fractionn)} / ${Math.sqrt(bsquare.fractiond)}</p2></p>`;
                    properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`;
                }
                else
                {
                    properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${Math.sqrt(bsquare.fractionn)} / √(${bsquare.fractiond})}</p2></p>`;
                    properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`;
    
                }
            }
            else if(Math.sqrt(bsquare.fractionn)%1!=0 && Math.sqrt(bsquare.fractiond)%1==0)
            {
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>√(${bsquare.fractionn}) / ${Math.sqrt(bsquare.fractiond)}</p2></p>`;
                properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`;
            }
            else
            {
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>√(${bsquare.fractionn} / ${bsquare.fractiond})</p2></p>`;
                properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`
            }
            b= Math.sqrt(fvalue/xvalue);
           }
           properties.innerHTML+=`<p><p1>Equação</p1>: <p><p2>x^2/${b*b} +y^2/${a*a} = 1 </p></p2></p>`;
           }
           
          a=parseFloat(a);
          b=parseFloat(b);
             Mathfunctionellipse2(a,b,P,tp,x2,y2,type);
        }


    //HYPERBOLA SECTION
    //Hyperbola 2
    if(xvalue<0 && yvalue>0)
    {
        tp=2;
        let a,b;
        type="Hipérbole";
        if(fvalue%xvalue==0)
        {
        b= Math.sqrt(fvalue/-xvalue);
        properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${b}</p2></p>`;
        properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${b*b}</p2></p>`;
        }
        if(fvalue%yvalue==0)
        {
        a= Math.sqrt(fvalue/yvalue);
        properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${a}</p2></p>`;
        properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${a*a}</p2></p>`;
        }
         if(fvalue%xvalue!=0)
        {   
            xvalue=xvalue*-1;
            if(fvalue%1==0 && xvalue%1==0)
            {
            const divider=gcd(fvalue,xvalue);
            fvalue=fvalue/divider;
            xvalue=xvalue/divider;
            }
            if(xvalue==1)
            {
                if(Math.sqrt(fvalue)%1==0)
                {
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${Math.sqrt(fvalue)}</p2></p>`;
                }
                else
                {
                    properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>√${fvalue}</p2></p>`;
                }
                properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${fvalue}</p2></p>`;
            }
            else
            {
            const bsquare = new Fração(fvalue,xvalue);//b^2
                if(Math.sqrt(bsquare.fractionn)%1==0)
            {
                if(Math.sqrt(bsquare.fractiond)%1==0)
                {
                    properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${Math.sqrt(bsquare.fractionn)} / ${Math.sqrt(bsquare.fractiond)}</p2></p>`;
                    properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`;
                }
                else
                {
                    properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${Math.sqrt(bsquare.fractionn)} / √${bsquare.fractiond}</p2></p>`;
                    properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`;
                }
            }
            else if(Math.sqrt(bsquare.fractionn)%1!=0 && Math.sqrt(bsquare.fractiond)%1==0)
            {
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>√${bsquare.fractionn} / ${Math.sqrt(bsquare.fractiond)}</p2></p>`;
                properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`; 
            }
            else
            {
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>√(${bsquare.fractionn} / ${bsquare.fractiond})</p2></p>`;
                properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`;
            }
            }
            b= Math.sqrt(fvalue/xvalue);
            xvalue=xvalue*-1;

        }
    
    if(fvalue%yvalue!=0)
            {
            fvalue=fvalueholder;
            if(fvalue%1==0 && yvalue%1==0)
            {
            const divider = gcd(fvalue,yvalue)
            fvalue=fvalue/divider;
            yvalue=yvalue/divider;
            }
            if(yvalue==1)
            {
                if(Math.sqrt%1==0)
                {
                    properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${Math.sqrt(fvalue)}</p2></p>`;
                }
                else
                {
                    properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>√${fvalue}</p2></p>`;
                }
                properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${fvalue}</p2></p>`;
            }
            else
            {
             const asquare = new Fração(fvalue,yvalue);//a^2
              if(Math.sqrt(asquare.fractionn)%1==0)
            {
                if(Math.sqrt(asquare.fractiond)%1==0)
                { 
                    properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${Math.sqrt(asquare.fractionn)} / ${Math.sqrt(asquare.fractiond)}</p2></p>`;
                    properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;  
                }
                else
                {
                    properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${Math.sqrt(asquare.fractionn)} / √(${asquare.fractiond})`;
                    properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
                }
            }
            else if(Math.sqrt(asquare.fractionn)%1!=0 && Math.sqrt(asquare.fractiond)%1==0)
            {
                properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>√(${asquare.fractionn})  / ${Math.sqrt(asquare.fractiond)}`;
                properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
                 
            }
            else {
            properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>√(${asquare.fractionn} / ${asquare.fractiond})</p2></p>`;
            properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
                }
            }
            a= Math.sqrt(fvalue/yvalue);
            }
            fvalue=1;
            properties.innerHTML+=`<p><p1>Equação</p1>: <p><p2>x^2/${a*a} - y^2/${b*b} = 1 </p></p2></p>`;
            Mathfunctionhyperbola2(a,b,P,tp,x2,y2,type);
            
    }
    //Hyperbola 1
    if(xvalue>0 && yvalue<0)
    {
        tp=1;
        let a,b;
        type="Hipérbole";
        if(fvalue%xvalue==0)
        {
        a= Math.sqrt(fvalue/xvalue);
        properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${a}</p2></p>`;
        properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${a*a}</p2></p>`;
        }
        if(fvalue%yvalue==0)
        {
        yvalue=yvalue*-1;
        b= Math.sqrt(fvalue/yvalue);
        properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${b}</p2></p>`;
        properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${b*b}</p2></p>`;
        yvalue=yvalue*-1;
        }
         if(fvalue%xvalue!=0)
        {   
             if(fvalue%1==0 && xvalue%1==0)
            {
            const divider = gcd(fvalue,xvalue);
            fvalue=fvalue/divider;
            xvalue=xvalue/divider;
            }
            if(xvalue==1)
            {
                if(Math.sqrt(fvalue)%1==0)
                {
                properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${Math.sqrt(fvalue)}</p2></p>`;
                }
                else
                {
                    properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>√${fvalue}</p2></p>`;
                }
                properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${fvalue}</p2></p>`;
            }
            else
            {
            const asquare = new Fração(fvalue,xvalue);//a^2
                if(Math.sqrt(asquare.fractionn)%1==0)
            {
                if(Math.sqrt(asquare.fractiond)%1==0)
                {
                    properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${Math.sqrt(asquare.fractionn)} / ${Math.sqrt(asquare.fractiond)}</p2></p>`;
                    properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
                }
                else
                {
                    properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>${Math.sqrt(asquare.fractionn)} / √(${asquare.fractiond})`;
                    properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
                }
            }
            else if(Math.sqrt(asquare.fractionn)%1!=0 && Math.sqrt(asquare.fractiond)%1==0)
            {
                properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>√(${asquare.fractionn})  / ${Math.sqrt(asquare.fractiond)}`;
                properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
            }
            else
            {
                properties.innerHTML+=`<p>Valor de <p1>a</p1>: <p2>√(${asquare.fractionn} / ${asquare.fractiond})</p2></p>`;
                properties.innerHTML+=`<p>Valor de <p1>a^2</p1>: <p2>${asquare.fractionn} / ${asquare.fractiond}</p2></p>`;
            }
        }
        a= Math.sqrt(fvalue/xvalue);
        }
    
    if(fvalue%yvalue!=0)
            {
                yvalue=yvalue*-1;
                fvalue=fvalueholder;
                if(fvalue%1==0 && yvalue%1==0)
                {
                const divider= gcd(fvalue,yvalue)
                fvalue=fvalue/divider;
                yvalue=yvalue/divider;
                }
                if(yvalue==1)
                {
                    if(Math.sqrt(fvalue)%1==0)
                {
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${Math.sqrt(fvalue)}</p2></p>`
                }
                else
                {
                    properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>√${fvalue}</p2></p>`
                }          
                properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${fvalue}</p2></p>`
                }
                else
                {
                const bsquare = new Fração(fvalue,yvalue);//a^2
         
                if(Math.sqrt(bsquare.fractionn)%1==0)
                {
                if(Math.sqrt(bsquare.fractiond)%1==0)
                {
                    properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${Math.sqrt(bsquare.fractionn)} / ${Math.sqrt(bsquare.fractiond)}</p2></p>`;
                    properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`;
                }
                else
                {
                    properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>${Math.sqrt(bsquare.fractionn)} / √${bsquare.fractiond}</p2></p>`;
                    properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`;
                }
                }
                else if(Math.sqrt(bsquare.fractionn)%1!=0 && Math.sqrt(bsquare.fractiond)%1==0)
                {
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>√${bsquare.fractionn} / ${Math.sqrt(bsquare.fractiond)}</p2></p>`;
                properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`;                  
                }
                else {
                properties.innerHTML+=`<p>Valor de <p1>b</p1>: <p2>√(${bsquare.fractionn} / ${bsquare.fractiond})</p2></p>`;
                properties.innerHTML+=`<p>Valor de <p1>b^2</p1>: <p2>${bsquare.fractionn} / ${bsquare.fractiond}</p2></p>`;
                }
            }
                b= Math.sqrt(fvalue/yvalue);
                yvalue=yvalue*-1;
            }
                fvalue=1;
                properties.innerHTML+=`<p><p1>Equação</p1>: <p><p2>x^2/${a*a} - y^2/${b*b} = 1 </p></p2></p>`;
                Mathfunctionhyperbola2(a,b,P,tp,x2,y2,type);
    }

    

}
//PARABLE
//Parable 2
function parable1(P,x1valuesquare,y1valuesquare,K,)//resolve no x1
{
    const xorigin=0;
    const yorigin=0;
    properties.innerHTML+=`<p><p1>Vértice</p1>: <p><p2>${xorigin}  ${yorigin}</p></p2></p>`;
    let x1,y1;
    const x1value=K[0][0]*P[0][0]+K[0][1]*P[1][0];
    const y1value=K[0][0]*P[0][1]+K[0][1]*P[1][1];
    if(x1valuesquare!=0)
    {
        // CALCULAR CASOS EM Q RESOLVE DIRETO NO X1 PRIMEIRO OPCÇÃO QND X1 VALUE EH ==0 LOGO A EQUAÇÃO FICA AX^2+BY=F
        for(let i=-25;i<=25; i=i+0.01)
        {
            x1=i;
            y1=((x1*x1)/(4*p));
            
            x=(P[0][0]*x1)+(P[0][1]*y1);
            y=(P[1][0]*x1)+(P[1][1]*y1);
            ctx.fillStyle= "white";
            ctx.beginPath();
            ctx.arc(250+x*10,250+y*-10,1,0,2*Math.PI);
            ctx.fill();
        }
           const p= -y1value/4*x1valuesquare; 
           properties.innerHTML+=`<p><p1>p</p1>: <p><p2>${p}</p></p2></p>`;
           const focusx = (0*P[0][0])+(p*P[0][1]);
           const focusy = (0*P[1][0])+(p*P[1][1]);
           properties.innerHTML+=`<p><p1>Foco</p1>: <p><p2>${focusx} ${focusy}</p></p2></p>`;
    }
    else
    {
        const p= -x1value/(4*y1valuesquare);
        for(let i=-25;i<=25; i=i+0.01)
        {
            x1=i;
            y1=Math.sqrt(4*p*x1);
            
            x=(P[0][0]*x1)+(P[0][1]*y1);
            y=(P[1][0]*x1)+(P[1][1]*y1);
            ctx.fillStyle= "white";
            ctx.beginPath();
            ctx.arc(250+x*10,250+y*-10,1,0,2*Math.PI);
            ctx.fill();
            
            x=(P[0][0]*x1)+(P[0][1]*-y1);
            y=(P[1][0]*x1)+(P[1][1]*-y1);
            ctx.fillStyle= "white";
            ctx.beginPath();
            ctx.arc(250+x*10,250+y*-10,1,0,2*Math.PI);
            ctx.fill();
            
        }

        properties.innerHTML+=`<p><p1>p</p1>: <p><p2>${p}</p></p2></p>`;
           const focusx = (p*P[0][0])+(0*P[0][1]);
           const focusy = (p*P[1][0])+(0*P[1][1]);
        properties.innerHTML+=`<p><p1>Foco</p1>: <p><p2>${focusx} ${focusy}</p></p2></p>`;

    }
    drawAxes();
  
}



function parable2(xvaluesquare,yvaluesquare,K,P,f)
{

    const x1value=K[0][0]*P[0][0]+K[0][1]*P[1][0];
    const y1value=K[0][0]*P[0][1]+K[0][1]*P[1][1];
    let x2value;
    let y2value;
    let p;
    if(xvaluesquare!=0)
    {
    //xvaluessquare*[(x+(x1value/2*xvaluesquare)^2 -(x1value/2*xvaluesquare)^2)]+ y1value(y+(f-xvaluesquare*(xvalue1/2*xvaluesquare)^2/yvalue1))
    // x2= (xvalue1/2*xvaluesquare)
    // y2= (f-xvaluesquare*(xvalue1/2*xvaluesquare)^2/y1value)
    //xvaluesquare * x2^2 = -y1value*y2
    // x2^2=  4*p=>(-y1value/(4*xvaluesquare))
     x2value= (x1value/(2*xvaluesquare));
     y2value= ((f-(xvaluesquare*(x1value/(2*xvaluesquare))*(x1value/(2*xvaluesquare))))/y1value);
     p = (-y1value/(4*xvaluesquare));
    }
    else if(yvaluesquare!=0)
    {
        y2value=y1value/(2*yvaluesquare);
        x2value=f-(((y1value/yvaluesquare)/2)*((y1value/yvaluesquare)/2))*yvaluesquare;
        x2value=x2value/x1value;
        p= -x1value/(4*yvaluesquare);
    }
  
    Mathfunctionparabola2(P,p,xvaluesquare,yvaluesquare,x2value,y2value);

}


function bhaskarap(a,b,c)
{
    return ((-b+Math.sqrt(b*b-4*a*c))/2*a);
}
function bhaskaran(a,b,c)
{
    return ((-b-Math.sqrt(b*b-4*a*c))/2*a);
}



const a = document.querySelector("#inputa");
const b = document.querySelector("#inputb");
const c = document.querySelector("#inputc");
const d = document.querySelector("#inputd");
const e = document.querySelector("#inpute");
const f = document.querySelector("#inputf");


const atag= document.getElementById('atag')
atag.addEventListener("click", function(g)
{
    g.preventDefault();
    let i=0; 
    

    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    const avalue = getvaluestring(a.value,0);
    const bvalue = getvaluestring(b.value,0);
    const cvalue = getvaluestring(c.value,0);
    const dvalue = getvaluestring(d.value,0);
    const evalue = getvaluestring(e.value,0);
    const fvalue = getvaluestring(f.value,0);
   
    


   
   
    /*
    if(string[i]="√")
        if strin[i]=")"
        string [if ate io]
       x= Math.sqrt(parseFloat(if ate io))
       replace √() -> x 
    */
   function getvaluestring(stringenter,counttimes)
   {
   let firstparantese=0;
   let count2=0;
   let lastparantese=0;
   let insidesquareroot=" ";
   for(let countsquareroot=0;countsquareroot<25;countsquareroot++)
   {
    if(stringenter[countsquareroot]=="√")
    {
        if(stringenter[countsquareroot+1]!=="(")
        {    
        firstparantese=countsquareroot+1;
            stringenter=spliceString(stringenter,countsquareroot+1,0,"(");
            let verificator=0;
            for(let i=countsquareroot+1;i<25;i++)
            {
              if(stringenter[i]===" ")
              {
                verificator=1;
                stringenter=spliceString(stringenter,i,0,")")
                break;
              }  
            }
            if(verificator==0)
            {
                stringenter= stringenter + ")"
            }
        }
        firstparantese=countsquareroot+1;
    }
    if(count2==0 && firstparantese!=0 &&stringenter[countsquareroot]==")")
    {
         lastparantese=countsquareroot;
         counttimes=1;
    }
    if(countsquareroot==24 && firstparantese!=0 && lastparantese==0)
    {
       window.alert("Parêntese de raiz quadrada inválido");
    }
    if(countsquareroot==24 && firstparantese==0 && lastparantese==0 && counttimes==0)
    {
        return parseFloat(stringenter);
    }
    if(countsquareroot==24 && firstparantese==0 && lastparantese==0 && counttimes==1)
    {
        counttimes=0;
    }
  
    
}
function replaceByIndex(str, index, replacement) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}
for(let dif=firstparantese+1;dif<lastparantese;dif++)
{
    insidesquareroot=insidesquareroot + stringenter[dif];
    stringenter=replaceByIndex(stringenter, dif , " ");    
}
if(counttimes!=0)
{
stringenter=replaceByIndex(stringenter, firstparantese , " ");    
stringenter=replaceByIndex(stringenter, lastparantese , " "); 
    const valueinside=Math.sqrt(eval(insidesquareroot));
    stringenter=replaceByIndex(stringenter, firstparantese-1, valueinside.toFixed(2));
    return getvaluestring(stringenter,counttimes);
}    
 else
 {
    return (eval(stringenter));
 }
}



    const halfb = bvalue/2;
    const A = [[avalue, halfb],[halfb, cvalue]];
    let eigenvalueA1 = bhaskarap(-1, avalue+cvalue, (halfb*halfb-avalue*cvalue));
    let eigenvalueA2 = bhaskaran(-1, avalue+cvalue, (halfb*halfb-avalue*cvalue));
    let A1 = [[avalue-eigenvalueA1, halfb],[halfb,cvalue-eigenvalueA1]];
    let A2 = [[avalue-eigenvalueA2, halfb],[halfb,cvalue-eigenvalueA2]];
    let firsteigenvector1;
    let firsteigenvector2;
    let secondeigenvector1;
    let secondeigenvector2;
    if(A1[0][0]<0)
    {
        A1[0][0]=A1[0][0]*-1;
        A1[0][1]=A1[0][1]*-1;
    }
   
    firsteigenvector1 = -1*A1[0][1];
    firsteigenvector2= A1[0][0];
    secondeigenvector1=-1*firsteigenvector2;
    secondeigenvector2= firsteigenvector1;
    if(secondeigenvector1<0 && secondeigenvector2<0)
    {
        secondeigenvector1=secondeigenvector1*-1;
        secondeigenvector2=secondeigenvector2*-1;
    }
    const norm = Math.sqrt(firsteigenvector1*firsteigenvector1+firsteigenvector2*firsteigenvector2);
    let P=[[0,0],[0,0]];
    let D=[[0,0],[0,0]];
    let Pfirstfirstvalue;
    let Pfirstsecondvalue;
    let Psecondfirstvalue;
    let Psecondsecondvalue;
    if(firsteigenvector1<0)
    {
     P=[[(secondeigenvector1/norm),(firsteigenvector1/norm)],[secondeigenvector2/norm, firsteigenvector2/norm]];
     D=[[eigenvalueA2,0],[0,eigenvalueA1]];
     Pfirstfirstvalue = `${secondeigenvector1}/√${firsteigenvector1*firsteigenvector1+firsteigenvector2*firsteigenvector2}`;
     Pfirstsecondvalue = `${firsteigenvector1}/√${firsteigenvector1*firsteigenvector1+firsteigenvector2*firsteigenvector2}`;
     Psecondfirstvalue = `${secondeigenvector1}/√${firsteigenvector1*firsteigenvector1+firsteigenvector2*firsteigenvector2}`;
     Psecondsecondvalue = `${firsteigenvector2}/√${firsteigenvector1*firsteigenvector1+firsteigenvector2*firsteigenvector2}`;
     const holdereigenvalue1=eigenvalueA1;
     eigenvalueA1=eigenvalueA2;
     eigenvalueA2= holdereigenvalue1;
    }
    else if (secondeigenvector1<0)
    {
    P=[[(firsteigenvector1/norm),(secondeigenvector1/norm)],[(firsteigenvector2/norm), (secondeigenvector2/norm)]];
    D=[[eigenvalueA1,0],[0,eigenvalueA2]];
    Pfirstfirstvalue =`${firsteigenvector1}/√${firsteigenvector1*firsteigenvector1+firsteigenvector2*firsteigenvector2}`;
    Pfirstsecondvalue = `${secondeigenvector1}/√${firsteigenvector1*firsteigenvector1+firsteigenvector2*firsteigenvector2}`;
    Psecondfirstvalue = `${firsteigenvector2}/√${firsteigenvector1*firsteigenvector1+firsteigenvector2*firsteigenvector2}`;
    Psecondsecondvalue = `${secondeigenvector2}/√${firsteigenvector1*firsteigenvector1+firsteigenvector2*firsteigenvector2}`;
    }

   // const Pt=[[P[0],[0],P[1][0]],[P[0][1],P[1][1]]]; 
    let K = [[0,0],[0,0]];
    K = [[dvalue, evalue],[0,0]];
    const KP= [K[0][0]*P[0][0]+K[0][1]*P[1][0],K[0][0]*P[0][1]+K[0][1]*P[1][1]];
    //eigenvalueA1x^2 + eigenvalueA2y^2 + KP[0][0] x +KP[0][1] y +f
    // first possibility : KP=0 OK
    //second possibility :x^2=0
    // third possibility : y^2=0
    //forth possibility: everthing
    properties.innerHTML='';
    properties.innerHTML+= `<p> A matriz <p1>A</p1> é formada por:<p><p> ${A[0][0]} ${A[0][1]}</p>
                            <p>${A[1][0]} ${A[1][1]}<p>`;
    properties.innerHTML+= `<p> O <p1>primeiro autovalor de A</p1> é <p2>${eigenvalueA1}</p2> </p>`;
    properties.innerHTML+= `<p> O <p1>segundo autovalor de A</p1> é <p2>${eigenvalueA2}</p2> </p>`;
    properties.innerHTML+= `<p> O vetor <p1>K</p1> é formado por:<p><p> <p2>${d.value} ${e.value}</p2></p>`;
    properties.innerHTML+= `<p> A matriz <p1>P</p1> é formada por:</p><p> <p2>${Pfirstfirstvalue} ${Pfirstsecondvalue}</p2></p>
                            <p><p2>${Psecondfirstvalue} ${Psecondsecondvalue}</p2></p>`;
    if(avalue==0 &&bvalue==0 && cvalue==0)
    window.alert("Valores inválidos");
    if((eigenvalueA1<0 && eigenvalueA2<0) && (fvalue<0))
    window.alert("Valores inválidos");
    if(KP[0]==0 && KP[1]==0)
    {
        part2(eigenvalueA1,eigenvalueA2,fvalue,P,0,0);
    }
    else if(eigenvalueA1==0) //parabola
    {
        if(K[0][0]*P[0][1]+K[0][1]*P[1][1]==0)
        {
            parable1(P,eigenvalueA1,eigenvalueA2,K,fvalue)
        }
        else
        {
        parable2(0,eigenvalueA2,K,P,fvalue);
        }
    }
    else if(eigenvalueA2==0)//parabola
    {
        if(K[0][0]*P[0][0]+K[0][1]*P[1][0]==0)
        {
            parable1(P,eigenvalueA1,eigenvalueA2,K,fvalue)
        }
        else
        parable2(eigenvalueA1,0,K,P,fvalue);
    }
    else
    {
        part1(eigenvalueA1,eigenvalueA2,fvalue,P,KP);
    }

    


    
});
};



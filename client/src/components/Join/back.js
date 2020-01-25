import './wrapspeed.js'
var back = () =>{
var ai_background;
ai_background= new WarpSpeed("bkFrame",{targetSpeed:0.8, speedAdjFactor:0.07, shape:"square", backgroundColor:"hsl(263,45%,8%)", speedWhileLoading:18});
return ai_background;
}

export default back

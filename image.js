const fileinput = document.querySelector("#imageFileInput");
const canvas = document.querySelector("#canvas");
const canvasCtx = canvas.getContext("2d");

const brightnessInput = document.querySelector("#brightness");
const saturationInput = document.querySelector("#saturation");
const blurInput = document.querySelector("#blur");
const invertionInput = document.querySelector("#invertion");


const settings = {};
let image = null;

function resetSettings(){
    settings.brightness="100";
    settings.saturation="100";
    settings.blur="0";
    settings.invertion="0";
    
    brightnessInput.value = settings.brightness;
   saturationInput.value = settings.saturation;
   blurInput.value = settings.blur;
   invertionInput.value = settings.invertion;
}
function updateSetting(key, value){
    settings[key] = value;
    if(!image) return;
    renderImage();
}
brightnessInput.addEventListener("change", () => updateSetting("brightness", brightnessInput.value));
saturationInput.addEventListener("change", () => updateSetting("saturation", saturationInput.value));
blurInput.addEventListener("change", ()=> updateSetting("blur", blurInput.value));
invertionInput.addEventListener("change", () => updateSetting("invertion", invertionInput.value));
fileinput.addEventListener("change", () =>{
    image = new Image();
    image.addEventListener("load", () =>{
        resetSettings();
        renderImage();
    });
    image.src = URL.createObjectURL(fileinput.files[0]);
});
 function renderImage(){
     canvas.width = image.width;
     canvas.height = image.height;
     canvasCtx.filter="generateFilter()";
     canvasCtx.drawImage(image, 0, 0);
 }
 function generateFilter(){
     const{ brightness, saturation, blur, inversion } = settings;
     return 'brightness(${brightness}%) saturate(${saturation}%) blur(${blur}px) invert(${invertion}%)';
 }
resetSettings();


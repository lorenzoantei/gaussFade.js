// RGB LED Gaussian Wave Breathing LED
//porting of https://makersportal.com/blog/2020/3/27/simple-breathing-led-in-arduino#block-yui_3_17_2_1_1585500397523_184541

const smoothness_pts = 500; //larger=slower change in brightness
var gamma = .14 // affects the width of peak (more or less darkness)
var beta = .5 // shifts the gaussian to be symmetric

for (var ii = 0; ii < smoothness_pts; ii++) {
    var pwm_val = 255*(Math.exp(-(Math.pow(((ii/smoothness_pts)-beta)/gamma,2))/2))
    console.log(Math.round(pwm_val));;
}
for (var ii = smoothness_pts; ii > -1; ii--) {
    var pwm_val = 255*(Math.exp(-(Math.pow(((ii/smoothness_pts)-beta)/gamma,2))/2))
    console.log(Math.round(pwm_val));
}

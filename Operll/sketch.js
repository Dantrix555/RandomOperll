let chavezImg;
let linkImg;
let zxImg;
let actualImage;
var y = 0;

function preload()
{
	chavezImg = loadImage("Images/Chavez.jpg");
	linkImg = loadImage("Images/Link.jpg");
	zxImg = loadImage("Images/ZX.jpg");
}

function setup()
{
	actualImage = chavezImg;
	createCanvas(300, 300);
	pixelDensity(1);
	background(0);
}

function draw()
{
	for(var i = 0; i < 50; i++)
	{
		var x = random(actualImage.width);
		var y = random(actualImage.height);
		var imageColorR = randomizeColor(actualImage.get(x,y)[0]);
		var imageColorG = randomizeColor(actualImage.get(x,y)[1]);
		var imageColorB = randomizeColor(actualImage.get(x,y)[2]);
		var imageColorA = randomizeColor(actualImage.get(x,y)[3]);
		var imageColor = [imageColorR, imageColorG, imageColorB, imageColorA]; 
		noStroke();
		fill(imageColor);
		ellipse(x, y, 5, 5);
	}
}

function calculateNewColor()
{
	for(var x = 0; x < width; x++)
	{
		var imageColorR = randomizeColor(actualImage.get(x,y)[0]);
		var imageColorG = randomizeColor(actualImage.get(x,y)[1]);
		var imageColorB = randomizeColor(actualImage.get(x,y)[2]);
		var imageColorA = randomizeColor(actualImage.get(x,y)[3]);
		var imageColor = [imageColorR, imageColorG, imageColorB, imageColorA]; 
		noStroke();
		fill(imageColor);
		ellipse(x, y, 1, 1);
	}
	y++;
	setTimeout(calculateNewColor, 1);
}

function randomizeColor(color)
{
	var powColor = color * color;
	var powColorStr = powColor.toString();
	var powColorLength = powColor.toString().length;
	var contadorSlice = 0;
	while(powColor > 255)
	{
		var result;
		if(powColorLength > 3)
		{
			if(contadorSlice % 2 == 0)
			{
				result = powColorStr.slice(0, -1);
			}
			else
			{
				result = powColorStr.slice(1);
			}
			powColor = parseInt(result, 10);
			powColorStr = result;
			powColorLength = powColorStr.toString().length;
			contadorSlice++;
		}
		else if(powColorLength == 3)
		{
			powColor /= 2;
		}
	}
	return powColor;
}

function ChangeImage(imageNumber)
{
	if(imageNumber == 1)
		actualImage = chavezImg;
	else if(imageNumber == 2)
		actualImage = linkImg;
	else
		actualImage = zxImg;
	clear();
	//calculateNewColor();
}

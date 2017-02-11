document.addEventListener('DOMContentLoaded', function(event) 
{
  // Button Builder
  var ButtonCreator = function(container) 
  {
    this.container = container;
    this.buttons = [];
  };

  ButtonCreator.prototype.appendButton = function(number) 
  {
    // Do not change this method, is not part of the test
    var element = document.createElement('button');
    element.innerText = 'Button #' + (number + 1);
    this.container.appendChild(element);
    this.buttons.push(element);
  };

  ButtonCreator.prototype.addEvent = function(j) 
  {
      this.buttons[j].onclick = function(event) {
         alert('Button #' + (j+1) + ' pressed!');
      }
  
  };
  // Initialization: Use button builder to generate 10 buttons
  var builder = new ButtonCreator(document.getElementById('container'));
  for (var i = 0; i < 10; ++i)
  {
    builder.appendButton(i);
    builder.addEvent(i);
  }
  
});
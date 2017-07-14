var g = G$('John', 'Doe', 'es');
g.greet().setLang('es').greet(true);
// g.greet().setLang('fr').greet(true); //This should throw an error
g.fillSelector('#greeting', true);
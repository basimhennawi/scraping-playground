var casper = require('casper').create();

casper.start('http://basimhennawi.com', function() {
    this.echo(this.getTitle()); // Basim Hennawi
});

casper.run();

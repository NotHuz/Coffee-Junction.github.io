function getBotResponse(input) {
    // Simple responses
    if (input == "hello") {
        return "Hello there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "commands") {
        return "Keywords/Commands: <br/><br/> <strong>menu</strong> - it will show our menu. <br/> <strong>about</strong> - it will show the 'about us'. <br/> <strong>contact</strong>- it will show 'contact info'. <br/> <strong>commands</strong> - it will show 'keyword'. <br/> <strong>how to order</strong> - it will show the instruction. <br/> <strong>location</strong> - it will show our address.";
    } else if (input == "menu") {
        return "Here's our menu: <br /><br /> Americano - Hot Espresso (12 OZ) - $45.00 <br /> Caffe Latte - Steamed Milk (12 OZ) - $65.00 <br /> Salted Caramel Espresso (12 OZ) - $75.00 <br /> Cafe Mocha Espresso (12 OZ) - $75.00 <br /> Spanish Latte Espresso (12 OZ) - $75.00 ";
    } else if (input == "about") {
        return "Hi there! <br /><br /> <strong>Coffee Junction</strong> is a coffee shop and retailer in Karachi, Pakistan.";
    } else if (input == "contact") {
        return "Here's our contact information: <br /><br /> <strong>Email:</strong> CoffeeJunction@gmail.com <br /> <strong>Phone Number:</strong> 0332-1992452<br /> <strong>Messenger:</strong> @coffeejunction <br /> <strong>Address:</strong> Bukc, Karachi, Pakistan ";
    } else if (input == "how to order") {
        return "Hi There! <br /><br /> To order, you can go to our <strong>Menu</strong> section and click the <strong'Add to Cart'></strong> button of your choice. <br /><br /> I hope you understand. Thank you so much!";
    } else if (input == "location") {
        return "Here's our address: <strong>BUKC near Karsaz,Karachi, Pakistan</strong>";


   
    } else {
        return "Try asking something else!";
    }
}
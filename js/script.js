console.log("Love the Philippines Website Loaded!");

function filterSelection(category){

    let cards =
    document.getElementsByClassName("filter");

    if(category === "all"){

        for(let i = 0; i < cards.length; i++){

            cards[i].style.display = "block";

        }

        return;
    }

    for(let i = 0; i < cards.length; i++){

        if(cards[i].classList.contains(category)){

            cards[i].style.display = "block";

        }else{

            cards[i].style.display = "none";

        }

    }

}



/* EVENTS */

function panagbenga(){
    alert("Panagbenga Festival is held every February in Baguio City and features colorful flower floats.");
}

function sinulog(){
    alert("Sinulog Festival is celebrated every January in Cebu City with street dancing and cultural performances.");
}

function atiatihan(){
    alert("Ati-Atihan Festival in Aklan is known as the Mother of All Philippine Festivals.");
}

function openModal(type){

    let title = "";
    let text = "";

    if(type === "air"){
        title = "Air Travel ✈️";
        text = `
        <b>Major Airports in the Philippines:</b><br><br>
        • Ninoy Aquino International Airport (Manila)<br>
        • Mactan-Cebu International Airport (Cebu)<br>
        • Clark International Airport (Pampanga)<br>
        • Francisco Bangoy International Airport (Davao)<br><br>
        ✈️ Tip: Book early for cheaper domestic flights!
        `;
    }

    else if(type === "bus"){
        title = "Bus Travel 🚌";
        text = `
        <b>Common Bus Terminals:</b><br><br>
        • PITX (Parañaque Integrated Terminal Exchange)<br>
        • Cubao Bus Terminals (Manila routes)<br>
        • DLTB / Victory Liner stations<br><br>
        🚌 Tip: Choose air-conditioned buses for long trips.
        `;
    }

    else if(type === "taxi"){
        title = "Taxi & Ride Apps 🚖";
        text = `
        <b>Recommended Ride Apps:</b><br><br>
        • Grab (most popular in PH)<br>
        • JoyRide (motorcycle & car)<br>
        • Angkas (motorcycle taxi)<br><br>
        🚖 Tip: Always check fare estimate before booking.
        `;
    }

    else if(type === "ferry"){
        title = "Ferry Services 🚢";
        text = `
        <b>Main Ferry Ports:</b><br><br>
        • Port of Manila<br>
        • Cebu Port<br>
        • Batangas Port<br>
        • Iloilo Port<br><br>
        🚢 Tip: Ferry schedules may change due to weather.
        `;
    }

    document.getElementById("modal-title").innerHTML = title;
    document.getElementById("modal-text").innerHTML = text;

    document.getElementById("modal").style.display = "flex";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

// close when clicking outside
window.onclick = function(event){
    let modal = document.getElementById("modal");
    if(event.target == document.getElementById("modal")){
        closeModal();
    }
}

function submitForm(){

    let name =
    document.getElementById("name").value;

    if(name.trim() === ""){

        alert("Please enter your name.");

        return false;
    }

    alert(
        "Thank you for contacting Love the Philippines! We will respond soon."
    );

    return false;
}

function showRecipe(food){

    let title = "";
    let recipe = "";

    if(food === "adobo"){

        title = "Chicken Adobo";

        recipe = `
        <h4>Ingredients:</h4>
        <ul>
            <li>1 kg chicken</li>
            <li>1/2 cup soy sauce</li>
            <li>1/2 cup vinegar</li>
            <li>6 cloves garlic</li>
            <li>2 bay leaves</li>
            <li>Peppercorns</li>
        </ul>

        <h4>Procedure:</h4>
        <p>
        Marinate chicken in soy sauce and garlic.
        Add vinegar, bay leaves, and peppercorns.
        Simmer for 30-40 minutes until tender.
        Serve with rice.
        </p>
        `;
    }

    else if(food === "sinigang"){

        title = "Pork Sinigang";

        recipe = `
        <h4>Ingredients:</h4>
        <ul>
            <li>1 kg pork ribs</li>
            <li>Tamarind mix</li>
            <li>Tomatoes</li>
            <li>Radish</li>
            <li>Kangkong</li>
            <li>String beans</li>
        </ul>

        <h4>Procedure:</h4>
        <p>
        Boil pork until tender.
        Add vegetables and tamarind mix.
        Simmer until vegetables are cooked.
        Serve hot.
        </p>
        `;
    }

    else if(food === "halohalo"){

        title = "Halo-Halo";

        recipe = `
        <h4>Ingredients:</h4>
        <ul>
            <li>Crushed ice</li>
            <li>Sweetened banana</li>
            <li>Jackfruit</li>
            <li>Beans</li>
            <li>Leche flan</li>
            <li>Ube ice cream</li>
        </ul>

        <h4>Procedure:</h4>
        <p>
        Layer sweet ingredients in a glass.
        Add crushed ice.
        Top with leche flan and ube ice cream.
        Mix and enjoy.
        </p>
        `;
    }

    document.getElementById("recipeTitle").innerHTML = title;
    document.getElementById("recipeContent").innerHTML = recipe;

    document.getElementById("recipeModal").style.display = "flex";
}

function closeRecipe(){
    document.getElementById("recipeModal").style.display = "none";
}

function showActivity(type){

    let title = "";
    let content = "";

    if(type === "island"){

        title = "Best Places for Island Hopping 🚤";

        content = `
        <ul>
            <li><b>El Nido, Palawan</b> - Lagoons and hidden beaches</li>
            <li><b>Coron, Palawan</b> - Shipwreck diving sites</li>
            <li><b>Honda Bay, Palawan</b> - Island hopping tours</li>
            <li><b>Caramoan, Camarines Sur</b> - Crystal-clear waters</li>
        </ul>
        `;
    }

    else if(type === "hiking"){

        title = "Best Hiking Destinations 🥾";

        content = `
        <ul>
            <li><b>Mt. Pulag</b> - Sea of clouds</li>
            <li><b>Mt. Ulap</b> - Beginner-friendly trail</li>
            <li><b>Mt. Apo</b> - Highest mountain in PH</li>
            <li><b>Mt. Pinatubo</b> - Crater lake adventure</li>
        </ul>
        `;
    }

    else if(type === "sightseeing"){

        title = "Best Sightseeing Spots 📸";

        content = `
        <ul>
            <li><b>Intramuros, Manila</b></li>
            <li><b>Chocolate Hills, Bohol</b></li>
            <li><b>Burnham Park, Baguio</b></li>
            <li><b>Mayon Volcano, Albay</b></li>
        </ul>
        `;
    }

    else if(type === "food"){

        title = "Best Food Tour Destinations 🍴";

        content = `
        <ul>
            <li><b>Pampanga</b> - Culinary Capital of the Philippines</li>
            <li><b>Binondo, Manila</b> - World's oldest Chinatown</li>
            <li><b>Cebu</b> - Famous Lechon</li>
            <li><b>Iloilo</b> - La Paz Batchoy and local delicacies</li>
        </ul>
        `;
    }

    document.getElementById("activityTitle").innerHTML = title;
    document.getElementById("activityContent").innerHTML = content;

    document.getElementById("activityModal").style.display = "flex";
}

function closeActivity(){
    document.getElementById("activityModal").style.display = "none";
}
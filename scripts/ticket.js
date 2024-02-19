let countSeat = 0,
    totalPrice = 0;

const seats = document.querySelectorAll("#selectBtn");

seats.forEach((seat) => {
    seat.addEventListener("click", (e) => {
        if (countSeat < 4) {
            // The Calculation
            countSeat += 1;
            totalPrice += 550;

            //Dynamic Style
            e.target.style.background = "#1DD100";
            e.target.style.color = "#FFFFFF";

            //Selected color change, seat can select one time, Next button check
            getId("unselected").classList.replace("flex", "hidden");
            getId("selected").classList.replace("hidden", "flex");
            seat.setAttribute("disabled", true);
            if (getId("passengerNumb").value !== "") removeDisabled("nextBtn");
            else addDisabled("nextBtn");

            // Appending
            createdLI("selectedSeat", e.target.innerText, "okay");
            createdLI("selectedSeat", "Economy", "center");
            createdLI("selectedSeat", 550, "right");

            // Changing The Value
            alterInnerText("countSeat", countSeat);
            alterInnerText("seatsLeft", 40 - countSeat);
            alterInnerText("totalPrice", totalPrice);
            alterInnerText("grandTotal", totalPrice);

            //Enabling The Button
            if (countSeat === 4) removeDisabled("couponSubmit");
        }
        else {
            alert(
                ""
            );
        }
    });
});

// Next button check
getId("passengerNumb").addEventListener("keyup", (e) => {
    if (e.target.value !== "" && countSeat > 0) {
        removeDisabled("nextBtn");
    } else {
        addDisabled("nextBtn");
    }
});

//Coupon calculation
getId("couponSubmit").addEventListener("click", (e) => {
    if (checkInput("couponInput", "NEW15")) {
        const discountedPrice = totalPrice * 0.15;
        createdLI("theprice", "Discount Price", "okay");
        createdLI("theprice", discountedPrice, "end");
        alterInnerText("grandTotal", totalPrice - discountedPrice);
        getId("removable").remove();
    } else if (checkInput("couponInput", "Couple 20")) {
        const discountedPrice = totalPrice * 0.2;
        createdLI("theprice", "Discount Price", "okay");
        createdLI("theprice", discountedPrice, "end");
        alterInnerText("grandTotal", totalPrice - discountedPrice);
        getId("removable").remove();
    } else {
        alert(
            ""
        );
    }
});
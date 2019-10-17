// Create an object that represents your pet.

// 1. Name property with a string value.
// 2. Species property with a string value.
// 3. Nicknames property with an array value. Array contains strings.
// 4. Age property with an integer value

// Object representing my cat Autumn with key value pairs.
const Autumn = {
    species: "cat",
    nicknames: ["Bottom", "Autumn, Autumn, stinky bottom"],
    age: 17,
    // When a value on a key is a function it's referred to as a method.
    meow: () => {
        console.log("meow")
    },
    purr: () => {
        console.log("purr")
    },
    // Causes an annoying pop-up window when invoked.
    hiss: () => {
        window.alert("hiss")
    },
    favoriteToy: [],

    // If statement checks string for "furry" using .includes method and pushes it to favoriteToy array if "furry" is detected.
    play: playtime = function (toy) {
        if (toy.includes("furry")) {
            this.favoriteToy.push(toy)
        }
    }
}
Autumn.meow()
Autumn.purr()
Autumn.hiss()

Autumn.play("furry mouse")
console.log(Autumn.favoriteToy)
